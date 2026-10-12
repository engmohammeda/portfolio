#!/usr/bin/env python3
"""
Build the brand + document assets for the portfolio.

    python3 scripts/build-assets.py [--fonts DIR] [--only favicons,qr,og,cv]

Generates (all inside /public):
    favicon.svg · favicon.ico · favicon-16/32 · apple-touch-icon ·
    android-chrome-192/512 · og-image.jpg (1200x630) ·
    qr/site.png · qr/whatsapp.png · cv/mohammed-albakhity-cv.pdf

Requirements:  pip install pillow qrcode arabic-reshaper python-bidi
Fonts:         the script extracts the TTFs it needs from the @expo-google-fonts
               npm packages (downloaded on demand) so nothing is vendored here.
"""
from __future__ import annotations

import argparse
import io
import os
import subprocess
import sys
import tarfile
import tempfile
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
    import arabic_reshaper
    from bidi.algorithm import get_display
    import qrcode
except ImportError as exc:  # pragma: no cover
    sys.exit(
        f"Missing dependency: {exc}. Run:\n"
        "  pip install pillow qrcode arabic-reshaper python-bidi"
    )

ROOT = Path(__file__).resolve().parents[1]
PUB = ROOT / "public"

# ---------------------------------------------------------------- brand tokens
NAVY = (11, 34, 57)
NAVY_700 = (18, 58, 92)
GOLD = (200, 162, 74)
GOLD_DEEP = (169, 131, 47)
GOLD_SOFT = (233, 214, 164)
PAPER = (245, 247, 250)
WHITE = (255, 255, 255)
INK = (12, 24, 37)
INK_2 = (60, 76, 95)
INK_3 = (102, 118, 135)
LINE = (226, 232, 240)

SITE = "https://engmohammeda.github.io/portfolio/"
WHATSAPP = "https://wa.me/967772791169"
EMAIL = "Mohammedalbkhyty@gmail.com"
PHONE = "+967 772 791 169"
NAME_AR = "محمد البخيتي علي"
NAME_EN = "Mohammed Al-Bakhity Ali"
ROLE_AR = "مهندس مساحة وطرق"
LOCATION_AR = "المملكة العربية السعودية"

FONT_PKGS = {
    "cairo": "@expo-google-fonts/cairo",
    "plex": "@expo-google-fonts/ibm-plex-sans-arabic",
    "mono": "@expo-google-fonts/jetbrains-mono",
}
FONT_FILES = {
    "cairo-900": ("cairo", "900Black/Cairo_900Black.ttf"),
    "cairo-700": ("cairo", "700Bold/Cairo_700Bold.ttf"),
    "cairo-600": ("cairo", "600SemiBold/Cairo_600SemiBold.ttf"),
    "plex-400": ("plex", "400Regular/IBMPlexSansArabic_400Regular.ttf"),
    "plex-500": ("plex", "500Medium/IBMPlexSansArabic_500Medium.ttf"),
    "plex-600": ("plex", "600SemiBold/IBMPlexSansArabic_600SemiBold.ttf"),
    "plex-700": ("plex", "700Bold/IBMPlexSansArabic_700Bold.ttf"),
    "mono-400": ("mono", "400Regular/JetBrainsMono_400Regular.ttf"),
    "mono-600": ("mono", "600SemiBold/JetBrainsMono_600SemiBold.ttf"),
}


# ------------------------------------------------------------------- utilities
def ar(text: str) -> str:
    """Shape + reorder Arabic so Pillow can render it correctly."""
    return get_display(arabic_reshaper.reshape(text))


class Fonts:
    """Lazy font cache keyed by the friendly names in FONT_FILES."""

    def __init__(self, files: dict[str, Path]):
        self.files = files
        self._cache: dict[tuple[str, int], ImageFont.FreeTypeFont] = {}

    def __call__(self, key: str, size: int) -> ImageFont.FreeTypeFont:
        cached = self._cache.get((key, int(size)))
        if cached is None:
            path = self.files.get(key)
            if path is None:
                raise KeyError(f"font '{key}' not available (have: {sorted(self.files)})")
            cached = ImageFont.truetype(str(path), int(size))
            self._cache[(key, int(size))] = cached
        return cached


def _collect(directory: Path) -> dict[str, Path]:
    return {key: directory / pkg / rel for key, (pkg, rel) in FONT_FILES.items()}


def text_r(d: ImageDraw.ImageDraw, x_right: float, y: float, text: str, font, fill) -> None:
    """Draw right-aligned text. (Pillow's anchor= needs libraqm; compute instead.)"""
    d.text((x_right - d.textlength(text, font=font), y), text, font=font, fill=fill)


def text_c(d: ImageDraw.ImageDraw, x_center: float, y: float, text: str, font, fill) -> None:
    """Draw centre-aligned text without relying on libraqm."""
    d.text((x_center - d.textlength(text, font=font) / 2, y), text, font=font, fill=fill)


def fetch_fonts(explicit: str | None) -> Fonts:
    if explicit:
        return Fonts({key: Path(explicit) / rel for key, (_pkg, rel) in FONT_FILES.items()})

    local = Path(tempfile.gettempdir()) / "portfolio-fonts"
    if all(path.exists() for path in _collect(local).values()):
        return Fonts(_collect(local))

    local.mkdir(parents=True, exist_ok=True)
    for key, npm_pkg in FONT_PKGS.items():
        print(f"· fetching fonts: {npm_pkg}")
        with tempfile.TemporaryDirectory() as tmp:
            subprocess.run(
                ["npm", "pack", npm_pkg, "--silent"], cwd=tmp, check=True,
                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
            )
            tarball = next(Path(tmp).glob("*.tgz"))
            with tarfile.open(tarball) as tar:
                for member in tar.getmembers():
                    if not member.name.endswith(".ttf"):
                        continue
                    rel = member.name.split("package/", 1)[-1]
                    target = local / key / rel
                    target.parent.mkdir(parents=True, exist_ok=True)
                    extracted = tar.extractfile(member)
                    if extracted:
                        target.write_bytes(extracted.read())
    return Fonts(_collect(local))


def rounded_mask(size: int, radius: int) -> Image.Image:
    mask = Image.new("L", (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, size * 4 - 1, size * 4 - 1), radius=radius * 4, fill=255
    )
    return mask.resize((size, size), Image.LANCZOS)


# --------------------------------------------------------------------- the mark
def build_mark(size: int) -> Image.Image:
    """Navy plate + gold 'road' converging to the horizon. Legible at 16px."""
    s = size * 4  # supersample
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, s - 1, s - 1), radius=int(s * 0.22), fill=NAVY)

    # road body
    d.polygon(
        [
            (s * 0.30, s * 0.98),
            (s * 0.70, s * 0.98),
            (s * 0.575, s * 0.16),
            (s * 0.425, s * 0.16),
        ],
        fill=GOLD,
    )
    # centre dashes
    for i, (t0, t1) in enumerate(((0.30, 0.42), (0.52, 0.64), (0.74, 0.86))):
        top_y = s * (0.16 + t0 * 0.82)
        bot_y = s * (0.16 + t1 * 0.82)
        w_top, w_bot = s * 0.016, s * 0.026
        cx_top = s * (0.5 - (0.075 * (1 - t0)))
        cx_bot = s * (0.5 - (0.2 * (1 - t1)))
        d.polygon(
            [
                (cx_top - w_top, top_y),
                (cx_top + w_top, top_y),
                (cx_bot + w_bot, bot_y),
                (cx_bot - w_bot, bot_y),
            ],
            fill=NAVY,
        )
    # horizon line
    d.rectangle((s * 0.24, s * 0.135, s * 0.76, s * 0.16), fill=GOLD_SOFT)

    img = img.resize((size, size), Image.LANCZOS)
    img.putalpha(rounded_mask(size, int(size * 0.22)))
    return img


FAVICON_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Mohammed Al-Bakhity">
  <rect width="64" height="64" rx="14" fill="#0B2239"/>
  <path d="M19.2 62 L44.8 62 L36.8 10 L27.2 10 Z" fill="#C8A24A"/>
  <rect x="15.4" y="8.6" width="33.2" height="1.6" fill="#E9D6A4"/>
  <path d="M30.9 21 L33.1 21 L34.5 34 L29.5 34 Z" fill="#0B2239"/>
  <path d="M30.0 38 L34.0 38 L35.9 50 L28.1 50 Z" fill="#0B2239"/>
  <path d="M27.6 54 L36.4 54 L38.6 62 L25.4 62 Z" fill="#0B2239"/>
</svg>
"""


def build_favicons() -> None:
    (PUB / "favicon.svg").write_text(FAVICON_SVG, encoding="utf-8")

    for size, name in (
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
        (180, "apple-touch-icon.png"),
        (192, "android-chrome-192x192.png"),
        (512, "android-chrome-512x512.png"),
    ):
        build_mark(size).save(PUB / name)

    # multi-size .ico
    icons = [build_mark(s).convert("RGBA") for s in (16, 32, 48)]
    icons[-1].save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("· favicons written")


# --------------------------------------------------------------------- OG image
def blueprint_grid(d: ImageDraw.ImageDraw, box, step=40, colour=(255, 255, 255, 14)):
    x0, y0, x1, y1 = box
    for x in range(int(x0), int(x1) + 1, step):
        d.line((x, y0, x, y1), fill=colour, width=1)
    for y in range(int(y0), int(y1) + 1, step):
        d.line((x0, y, x1, y), fill=colour, width=1)


def tracking(d: ImageDraw.ImageDraw, xy, text: str, font, fill, gap: int) -> int:
    """Draw Latin text with letter-spacing; returns the advance width."""
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + gap
    return int(x - xy[0])


def build_og(f: Fonts) -> None:
    """1200x630 social preview — drafted as an engineering sheet.

    NOTE: Arabic is rendered through helper functions that position text by
    measured width, because Pillow's `anchor=` requires libraqm which is not
    available in every environment this script runs in.
    """
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), NAVY)
    d = ImageDraw.Draw(img, "RGBA")
    COL = 660  # left column: everything is right-aligned to this axis (RTL)

    blueprint_grid(d, (0, 0, W, H), 40, (255, 255, 255, 13))
    for i in range(7):
        d.arc((560 - i * 26, -60 + i * 22, 1240 + i * 16, 300 + i * 22), 200, 340, fill=(200, 162, 74, 40), width=1)

    # sheet frame + corner ticks
    d.rectangle((26, 26, W - 26, H - 26), outline=(255, 255, 255, 40), width=1)
    for cx, cy, sx, sy in ((26, 26, 1, 1), (W - 26, 26, -1, 1), (26, H - 26, 1, -1), (W - 26, H - 26, -1, -1)):
        d.line((cx, cy, cx + 28 * sx, cy), fill=GOLD, width=2)
        d.line((cx, cy, cx, cy + 28 * sy), fill=GOLD, width=2)

    # ---- sheet header (drawn left-to-right: Latin block sits at the top-left)
    mark = build_mark(66)
    img.paste(mark, (66, 64), mark)
    tracking(d, (150, 72), "MOHAMMED AL-BAKHITY", f("mono-600", 19), GOLD_SOFT, 2)
    tracking(d, (150, 100), "PROFILE SHEET · REV 3.0 · 2026", f("mono-400", 14), (255, 255, 255, 130), 2)

    # ---- name / role (right-aligned to COL)
    text_r(d, COL, 152, ar(NAME_AR), f("cairo-900", 54), WHITE)
    text_r(d, COL, 228, ar("مهندس مساحة وطرق — مسّاح كميات · مكتب فني · GIS"), f("plex-600", 23), GOLD_SOFT)

    # ---- capability chips
    x = COL
    for cap in ["مساحة", "طرق", "كميات", "CAD", "GIS", "تقارير"]:
        label = ar(cap) if any("\u0600" <= c <= "\u06ff" for c in cap) else cap
        font = f("plex-500", 18) if label != cap else f("mono-400", 16)
        box_w = d.textlength(label, font=font) + 26
        d.rounded_rectangle((x - box_w, 278, x, 316), radius=7, outline=(201, 162, 74, 130), width=1)
        text_r(d, x - 13, 286, label, font, (255, 255, 255, 235))
        x -= box_w + 9

    # ---- deliverables
    d.line((72, 348, COL, 348), fill=(255, 255, 255, 45), width=1)
    text_r(d, COL, 366, ar("المخرجات: مخططات DWG · جداول كميات XLSX · خرائط GIS · تقارير تنفيذ"),
           f("plex-400", 19), (255, 255, 255, 195))

    # ---- availability
    label = ar("متاح للعمل — " + LOCATION_AR)
    font = f("plex-600", 20)
    text_r(d, COL, 408, label, font, (126, 226, 168))
    dot_x = COL - d.textlength(label, font=font) - 140
    d.ellipse((dot_x, 415, dot_x + 11, 426), fill=(126, 226, 168))

    # ---- stat row
    d.line((72, 456, COL, 456), fill=(255, 255, 255, 45), width=1)
    sx = COL
    for value, lab in [("6", "مسارات مهنية"), ("24", "قدرة تنفيذية"), ("14", "أداة عمل")]:
        text_r(d, sx, 476, value, f("mono-600", 27), GOLD)
        text_r(d, sx, 514, ar(lab), f("plex-500", 15), (255, 255, 255, 175))
        sx -= 190

    # ---- right: schematic drawing panel
    px0, py0, px1, py1 = 700, 92, 1140, 452
    d.rectangle((px0, py0, px1, py1), fill=(255, 255, 255, 10), outline=(255, 255, 255, 45), width=1)
    blueprint_grid(d, (px0, py0, px1, py1), 32, (255, 255, 255, 16))
    text_r(d, px1 - 10, py0 + 10, "PROFILE_SHEET.dwg", f("mono-400", 13), (255, 255, 255, 150))
    poly = [(742, 190), (1080, 176), (1112, 352), (786, 400)]
    d.line(poly + [poly[0]], fill=GOLD, width=2, joint="curve")
    d.line((742, 158, 1080, 146), fill=(255, 255, 255, 110), width=1)
    d.line((742, 152, 742, 164), fill=(255, 255, 255, 110), width=1)
    d.line((1080, 140, 1080, 152), fill=(255, 255, 255, 110), width=1)
    text_c(d, 911, 120, "84.20 m", f("mono-400", 15), (255, 255, 255, 185))
    d.line([(718, 382), (900, 312), (1122, 236)], fill=(255, 255, 255, 205), width=3)
    d.line([(718, 392), (900, 322), (1122, 246)], fill=(255, 255, 255, 85), width=1)
    for cx, cy in ((790, 222), (930, 238), (1044, 288), (872, 340)):
        d.line((cx - 7, cy, cx + 7, cy), fill=WHITE, width=2)
        d.line((cx, cy - 7, cx, cy + 7), fill=WHITE, width=2)
        d.ellipse((cx - 4.5, cy - 4.5, cx + 4.5, cy + 4.5), outline=GOLD, width=2)
    d.polygon([(1010, 418), (1017, 430), (1003, 430)], outline=GOLD)
    d.text((1022, 420), "BM 1.250", font=f("mono-400", 13), fill=GOLD)
    for i in range(3):
        x0 = 1120 - i * 26
        d.rectangle((x0 - 26, 420, x0, 426), fill=WHITE if i % 2 == 0 else (255, 255, 255, 60))
    text_r(d, 1120, 432, "15 m", f("mono-400", 12), (255, 255, 255, 140))

    # ---- footer strip
    d.rectangle((0, H - 10, W, H), fill=GOLD_DEEP)
    tracking(d, (66, H - 52), "SAUDI ARABIA · SHEET 01/01 · +967 772 791 169", f("mono-400", 16), (255, 255, 255, 155), 1)
    text_r(d, W - 66, H - 52, EMAIL, f("mono-400", 16), (255, 255, 255, 155))

    img.save(PUB / "og-image.jpg", quality=92, optimize=True, progressive=True)
    print("· og-image.jpg written (1200x630)")


# -------------------------------------------------------------------- QR codes
def build_qr() -> None:
    (PUB / "qr").mkdir(exist_ok=True)
    for name, data in (("site", SITE), ("whatsapp", WHATSAPP)):
        qr = qrcode.QRCode(version=None, error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=12, border=2)
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill_color=NAVY, back_color=WHITE).convert("RGB")
        img.save(PUB / "qr" / f"{name}.png")
    print("· QR codes written")


# ------------------------------------------------------------------------ CV
def wrap(text: str, font, max_w: float, arabic: bool) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        probe = ar(candidate) if arabic else candidate
        if font.getlength(probe) <= max_w or not current:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def build_cv(f: Fonts) -> None:
    """Two-page A4 professional sheet: page 1 Arabic (RTL), page 2 English."""
    DPI = 150
    W, H = 1240, 1754  # A4 @150dpi
    M = 68
    BODY_MAX = W - 2 * M

    def blank() -> tuple[Image.Image, ImageDraw.ImageDraw]:
        page = Image.new("RGB", (W, H), WHITE)
        return page, ImageDraw.Draw(page)

    def rules_row(d, x, y, w, n, colour, gap=10, seg=None):
        seg = seg or (w - gap * (n - 1)) / n
        for i in range(n):
            d.rectangle((x + i * (seg + gap), y, x + i * (seg + gap) + seg, y + 3), fill=colour)

    def header(page: Image.Image, d: ImageDraw.ImageDraw, rtl: bool) -> int:
        d.rectangle((0, 0, W, 152), fill=NAVY)
        d.rectangle((0, 152, W, 158), fill=GOLD_DEEP)
        mark = build_mark(64)
        page.paste(mark, (W - M - 64, 36) if rtl else (M, 36), mark)
        name = ar(NAME_AR) if rtl else NAME_EN
        role = ar(ROLE_AR) if rtl else "Surveying & Roads Engineer"
        if rtl:
            x_anchor = W - M - 84
            text_r(d, x_anchor, 34, name, f("cairo-900", 38), WHITE)
            text_r(d, x_anchor, 92, role, f("plex-600", 19), GOLD_SOFT)
            d.text((M, 52), EMAIL, font=f("mono-400", 13), fill=(255, 255, 255, 205))
            d.text((M, 74), PHONE, font=f("mono-400", 13), fill=(255, 255, 255, 205))
            d.text((M, 96), SITE.replace("https://", ""), font=f("mono-400", 13), fill=(255, 255, 255, 205))
        else:
            d.text((M + 84, 34), name, font=f("cairo-900", 38), fill=WHITE)
            d.text((M + 84, 92), role, font=f("plex-600", 19), fill=GOLD_SOFT)
            text_r(d, W - M, 52, EMAIL, f("mono-400", 13), (255, 255, 255, 205))
            text_r(d, W - M, 74, PHONE, f("mono-400", 13), (255, 255, 255, 205))
            text_r(d, W - M, 96, SITE.replace("https://", ""), f("mono-400", 13), (255, 255, 255, 205))
        return 190

    def heading(d, y: int, text: str, rtl: bool) -> int:
        if rtl:
            text_r(d, W - M, y, ar(text), f("plex-700", 17), GOLD_DEEP)
        else:
            tracking(d, (M, y + 2), text.upper(), f("mono-600", 14), GOLD_DEEP, 1)
        y += 30
        d.line((M, y, W - M, y), fill=(201, 212, 226), width=1)
        return y + 16

    def para(d, y: int, text: str, rtl: bool, size=14.5, colour=INK_2, lead=24, gap=10) -> int:
        font = f("plex-400", size)
        for line in wrap(text, font, BODY_MAX, rtl):
            value = ar(line) if rtl else line
            if rtl:
                text_r(d, W - M, y, value, font, colour)
            else:
                d.text((M, y), value, font=font, fill=colour)
            y += lead
        return y + gap

    def track_row(d, y: int, title: str, body: str, rtl: bool, title_x=210) -> int:
        """One capability track: bold title + wrapped description, never overlapping."""
        if rtl:
            title_font, body_font = f("plex-700", 14), f("plex-400", 12.5)
            line_start = max(title_x, d.textlength(ar(title), font=title_font) + 16)
            lines = wrap(body, body_font, BODY_MAX - line_start - 16, True)
            text_r(d, W - M, y, ar(title), title_font, INK)
            for i, line in enumerate(lines):
                text_r(d, W - M - line_start, y + i * 19, ar(line), body_font, INK_2)
            return y + max(24, len(lines) * 19 + 8)
        title_font, body_font = f("plex-700", 14), f("plex-400", 12.5)
        line_start = max(title_x, d.textlength(title, font=title_font) + 16)
        lines = wrap(body, body_font, BODY_MAX - line_start - 16, False)
        d.text((M, y), title, font=title_font, fill=INK)
        for i, line in enumerate(lines):
            d.text((M + line_start, y + i * 19), line, font=body_font, fill=INK_2)
        return y + max(24, len(lines) * 19 + 8)

    def job_block(d, y: int, role: str, period: str, place: str, desc: str, rtl: bool) -> int:
        role_font = f("plex-700", 14.5)
        if rtl:
            text_r(d, W - M, y, ar(role), role_font, INK)
        else:
            d.text((M, y), role, font=role_font, fill=INK)
        y += 21
        # second line: place first (right), period to its left — measured, so no overlap
        place_font, period_font = f("plex-400", 12.5), f("mono-400", 11.5)
        if rtl:
            text_r(d, W - M, y, ar(place), place_font, INK_3)
            gap_x = W - M - d.textlength(ar(place), font=place_font) - 14
            text_r(d, gap_x, y + 1, period, period_font, GOLD_DEEP)
        else:
            d.text((M, y), place, font=place_font, fill=INK_3)
            text_r(d, W - M, y + 1, period, period_font, GOLD_DEEP)
        y += 20
        return para(d, y, desc, rtl, size=12.5, lead=21, gap=11)

    # ------------------------------------------------- page 1 — Arabic
    page, d = blank()
    y = header(page, d, True)
    y = heading(d, y, "الملخص المهني", True)
    y = para(d, y, "أعمل في المساحة والطرق منذ 2022 بعمل ميداني ومكتبي متواصل، وأغطي سلسلة العمل كاملة: الرفع والتوقيع بأجهزة دقيقة، ثم المعالجة والرسم في المكتب الفني، ثم حساب الكميات وإعداد الجداول، ثم خرائط GIS، ثم تقارير التنفيذ.", True, size=14)
    y = para(d, y, "أُسلّم كل عمل بملفاته المصدرية (DWG · XLSX · PDF) مع تقرير يوضّح طريقة الحساب، حتى يستطيع الفريق التالي البناء على العمل بدل إعادته.", True, size=14)

    y = heading(d, y, "القدرات — ستة مسارات", True)
    for title, body in [
        ("المساحة الميدانية", "رفع طبوغرافي وعقاري · توقيع محاور ومناسيب · نقاط ضبط · ميزانية ومقاطع"),
        ("الطرق والبنية التحتية", "تخطيط المسار والمنحنيات · مناسيب تصميمية · مقاطع طولية وعرضية · جداول مساحات"),
        ("الكميات والحصر", "حفر وردم · خرسانة · أسفلت وطبقات أساس · جدول BOQ · مستخلصات · مذكرة حساب"),
        ("المكتب الفني والرسم", "مخططات تنفيذية · as-built · طبقات ومقاسات · لوحات بمقياس · أرشفة إصدارات"),
        ("البيانات والخرائط", "خرائط GIS وطبقات · KML / SHP / GeoJSON · QGIS · لوحات ومؤشرات إكسل"),
        ("الإشراف والتنفيذ", "متابعة مناسيب وأبعاد · قوائم فحص · تقارير يومية وأسبوعية · سجل ملاحظات"),
    ]:
        y = track_row(d, y, title, body, True, title_x=200)
    y += 10

    y = heading(d, y, "الخبرة والتعليم", True)
    for role, period, place, desc in [
        ("أعمال مساحية وهندسية — ميداني ومكتبي", "2023 — الآن", "السعودية / اليمن",
         "تنفيذ الرفع المساحي وتوقيع المحاور والمناسيب، إعداد مخططات AutoCAD، حصر الكميات وإعداد جداول BOQ والمستخلصات، ومتابعة التنفيذ بالتقارير اليومية."),
        ("أعمال المساحة والطرق", "2022 — 2023", "اليمن",
         "رفع طبوغرافي وعقاري وتقسيم أراضٍ، توقيع مسارات الطرق ونقل المناسيب، وميزانية طولية وعرضية وإخراج مقاطع للتنفيذ."),
        ("دبلوم هندسة المساحة والطرق", "2020 — 2022", "المعهد التقني — قسم المساحة والطرق",
         "مساحة مستوية وتطبيقية وحساب إحداثيات، هندسة الطرق والمنحنيات، الرسم الهندسي وحساب الكميات."),
    ]:
        y = job_block(d, y, role, period, place, desc, True)

    y = heading(d, y, "المهارات والأدوات", True)
    skills = [
        "توتال ستيشن — متمكّن", "ليفل دقيق — متمكّن", "GNSS / RTK — جيد",
        "AutoCAD 2D — متقدم", "Civil 3D — جيد", "Excel (كميات) — متقدم",
        "QGIS — جيد", "Google Earth Pro / KML — متقدم", "تقارير الموقع — متمكّن",
    ]
    col_w = BODY_MAX / 3
    for i, skill in enumerate(skills):
        col, row = divmod(i, 3)
        text_r(d, W - M - col * col_w, y + row * 22, ar("•  " + skill), f("plex-400", 12.5), INK_2)
    y += 3 * 22 + 14

    y = heading(d, y, "الشهادات", True)
    for cert, meta in [
        ("دبلوم هندسة المساحة والطرق", "المعهد التقني — 2022"),
        ("شهادة AutoCAD — الرسم الهندسي", "مركز تدريب هندسي — 2022"),
        ("شهادة حساب الكميات", "مركز هندسي معتمد — 2023"),
        ("بطاقة الهوية المهنية", "جهة رسمية — 2024"),
    ]:
        cert_font, meta_font = f("plex-500", 12.5), f("plex-400", 11.5)
        text_r(d, W - M, y, ar(cert), cert_font, INK)
        text_r(d, W - M - d.textlength(ar(cert), font=cert_font) - 14, y, ar("— " + meta), meta_font, INK_3)
        y += 22

    y = heading(d, y, "الخدمات المقدَّمة (مخرجات كل خدمة)", True)
    for title, body in [
        ("رفع مساحي طبوغرافي / عقاري", "مخطط DWG + PDF · جدول إحداثيات XLSX · تقرير رفع"),
        ("توقيع محاور ومناسيب", "جدول توقيع محطات · نقاط مناسيب موقّعة · تقرير توقيع"),
        ("ميزانية ومقاطع طولية وعرضية", "مقاطع · جدول مناسيب وميول · كميات أولية"),
        ("حساب كميات وجدول BOQ", "جدول BOQ (XLSX/PDF) · مذكرة حساب · مستخلص"),
        ("رسم مخططات AutoCAD و as-built", "DWG منظّم بالطبقات · لوحات PDF بمقياس · ملف as-built"),
        ("خرائط GIS وملفات KML", "خرائط وطبقات · KML / GeoJSON · لوحة مؤشرات إكسل"),
        ("إشراف ومتابعة تنفيذ", "تقارير يومية وأسبوعية · قوائم فحص · سجل ملاحظات"),
    ]:
        y = track_row(d, y, title, body, True, title_x=250)

    y = heading(d, y, "مشاريع مختارة", True)
    for title, meta, desc in [
        ("مسح وتوقيع طريق ريفي — 14 كم (2024)", "طرق + مساحة",
         "رفع كامل للمسار، توقيع المحاور والمنحنيات، مناسيب، ومقاطع طولية وعرضية · المخرجات: DWG · جدول توقيع"),
        ("رفع وتقسيم أرض سكنية — 48 قطعة (2023)", "مساحة عقارية",
         "تعيين حدود، رفع معالم، تقسيم وجدول مساحات وزوايا · المخرجات: مخطط تقسيم · جدول إحداثيات"),
        ("جدول كميات مشروع طرق (2024)", "كميات + BOQ",
         "حصر حفر وردم وأساس وأسفلت مع مذكرة حساب ومعاملات · المخرجات: BOQ (XLSX) · مستخلص"),
    ]:
        y = track_row(d, y, title, desc, True, title_x=210)

    # footer block, page 1
    y = max(y + 14, H - 210)
    d.line((M, y, W - M, y), fill=(201, 212, 226), width=1)
    y += 18
    qr_img = qrcode.make(SITE).convert("RGB").resize((104, 104), Image.LANCZOS)
    page.paste(qr_img, (M, y))
    d.text((M + 120, y + 4), "Portfolio & CV:", font=f("plex-700", 13.5), fill=INK)
    d.text((M + 120, y + 26), SITE.replace("https://", ""), font=f("mono-400", 12), fill=INK_3)
    d.text((M + 120, y + 48), f"{EMAIL} · {PHONE}", font=f("mono-400", 12), fill=INK_3)
    text_r(d, W - M, y + 4, ar("متاح للعمل: ميداني ومكتبي — تنقّل داخل المملكة · بدء فوري"), f("plex-600", 13), GOLD_DEEP)
    text_r(d, W - M, y + 30, ar("آخر تحديث: 2026-10"), f("plex-400", 11.5), INK_3)

    # ------------------------------------------------- page 2 — English
    page2, d2 = blank()
    y2 = header(page2, d2, False)
    y2 = heading(d2, y2, "Profile", False)
    y2 = para(d2, y2, "Surveying & roads engineer working since 2022 across field and office. I cover the full chain: precise field survey and setting-out, processing and drafting, quantity take-off, GIS mapping, and execution reporting — so a task is never handed between three parties.", False)
    y2 = para(d2, y2, "Every deliverable ships with its source files (DWG · XLSX · PDF) and a calculation memo, so the next team builds on the work instead of repeating it.", False)

    y2 = heading(d2, y2, "Capabilities — six tracks", False)
    for title, body in [
        ("Field Surveying", "Topographic & cadastral survey · setting out axes and levels · control points · levelling and sections"),
        ("Roads & Infrastructure", "Route design and curves · design levels · longitudinal and cross sections · area schedules"),
        ("Quantities & BOQ", "Excavation & backfill · concrete · asphalt and base layers · BOQ · payment certificates"),
        ("Technical Office & CAD", "Construction drawings · as-built · layers and dimensions · scaled sheets · archiving"),
        ("GIS & Data", "GIS maps and layers · KML / SHP / GeoJSON · QGIS · Excel dashboards"),
        ("Site Supervision", "Level and dimension control · checklists · daily reports · observation log"),
    ]:
        y2 = track_row(d2, y2, title, body, False, title_x=180)
    y2 += 8

    y2 = heading(d2, y2, "Experience & Education", False)
    for role, period, place, desc in [
        ("Surveying & engineering works — field & office", "2023 — present", "Saudi Arabia / Yemen",
         "Survey, setting-out and level work; AutoCAD drawings issued for approval; quantity take-off, BOQ and payment certificates; field follow-up with daily reporting."),
        ("Surveying & roads works", "2022 — 2023", "Yemen",
         "Topographic and cadastral survey, land division, road route setting-out and levelling, longitudinal and cross sections for execution."),
        ("Diploma in Surveying & Roads Engineering", "2020 — 2022", "Technical Institute — Surveying & Roads Dept.",
         "Plane and applied surveying with coordinate computation, road engineering, engineering drawing and quantity calculation."),
    ]:
        y2 = job_block(d2, y2, role, period, place, desc, False)

    y2 = heading(d2, y2, "Skills & tools", False)
    skills_en = [
        "Total Station — proficient", "Digital Level — proficient", "GNSS / RTK — good",
        "AutoCAD 2D — advanced", "Civil 3D — good", "Excel (quantities) — advanced",
        "QGIS — good", "Google Earth Pro / KML — advanced", "Site reports — proficient",
    ]
    col_w2 = BODY_MAX / 3
    for i, skill in enumerate(skills_en):
        col, row = divmod(i, 3)
        d2.text((M + col * col_w2, y2 + row * 22), f"•  {skill}", font=f("plex-400", 12.5), fill=INK_2)
    y2 += 3 * 22 + 14

    y2 = heading(d2, y2, "Credentials", False)
    for cert, meta in [
        ("Diploma in Surveying & Roads Engineering", "Technical Institute — 2022"),
        ("AutoCAD — Engineering Drawing certificate", "Engineering training centre — 2022"),
        ("Quantity Surveying certificate", "Certified engineering centre — 2023"),
        ("Professional ID card", "Official authority — 2024"),
    ]:
        d2.text((M, y2), f"•  {cert}", font=f("plex-500", 13), fill=INK)
        text_r(d2, W - M, y2 + 1, meta, f("mono-400", 11.5), INK_3)
        y2 += 22

    y2 = heading(d2, y2, "Services & deliverables", False)
    for title, body in [
        ("Topographic / cadastral survey", "DWG + PDF drawing · coordinate schedule XLSX · survey report"),
        ("Setting out axes & levels", "Station setting-out schedule · levelled points · report"),
        ("Levelling & cross sections", "Sections · level and slope schedule · preliminary quantities"),
        ("Quantity take-off & BOQ", "BOQ (XLSX/PDF) · calculation memo · payment certificate"),
        ("AutoCAD drafting & as-built", "Layer-organised DWG · scaled PDF sheets · as-built file"),
        ("GIS maps & KML files", "Maps and layers · KML / GeoJSON · Excel dashboard"),
        ("Supervision & reporting", "Daily/weekly reports · checklists · observation log"),
    ]:
        y2 = track_row(d2, y2, title, body, False, title_x=250)

    y2 = heading(d2, y2, "Selected work", False)
    for title, desc in [
        ("Rural road survey & setting-out — 14 km (2024)",
         "Full route survey, centreline and curve setting-out, levels plus L/C sections · DWG · setting-out schedule"),
        ("Residential land survey & subdivision — 48 plots (2023)",
         "Boundary definition, feature survey, subdivision with area and corner schedules · plan · coordinate schedule"),
        ("Road project quantity take-off (2024)",
         "Excavation, backfill, base and asphalt take-off with calculation memo and factors · BOQ (XLSX) · certificate"),
    ]:
        y2 = track_row(d2, y2, title, desc, False, title_x=252)

    # footer block, page 2
    y2 = max(y2 + 14, H - 210)
    d2.line((M, y2, W - M, y2), fill=(201, 212, 226), width=1)
    y2 += 18
    page2.paste(qr_img, (M, y2))
    d2.text((M + 120, y2 + 4), "Portfolio & contact", font=f("plex-700", 13.5), fill=INK)
    d2.text((M + 120, y2 + 26), SITE.replace("https://", ""), font=f("mono-400", 12), fill=INK_3)
    d2.text((M + 120, y2 + 48), f"{EMAIL} · {PHONE}", font=f("mono-400", 12), fill=INK_3)
    text_r(d2, W - M, y2 + 4, "Available for work — field & office, immediate start.", f("plex-600", 13), GOLD_DEEP)
    text_r(d2, W - M, y2 + 30, "Saudi Arabia · updated 2026-10", f("mono-400", 11.5), INK_3)

    out = PUB / "cv" / "mohammed-albakhity-cv.pdf"
    out.parent.mkdir(parents=True, exist_ok=True)
    page.save(out, save_all=True, append_images=[page2], resolution=DPI)
    print(f"· CV written → {out.relative_to(ROOT)} (2 pages, A4)")


# ------------------------------------------------------- credential cover sheets
CREDENTIALS = [
    {
        "file": "diploma.pdf",
        "type_ar": "دبلوم", "type_en": "Diploma",
        "title_ar": "دبلوم هندسة المساحة والطرق",
        "title_en": "Diploma in Surveying & Roads Engineering",
        "issuer_ar": "المعهد التقني — قسم المساحة والطرق",
        "issuer_en": "Technical Institute — Surveying & Roads Department",
        "date": "2022",
        "note_ar": "المؤهل الأساسي — برنامج سنتين يغطي المساحة المستوية والتطبيقية، هندسة الطرق، الرسم الهندسي وحساب الكميات.",
        "note_en": "Primary qualification — a two-year programme covering plane and applied surveying, road engineering, engineering drawing and quantity calculation.",
    },
    {
        "file": "autocad.pdf",
        "type_ar": "شهادة", "type_en": "Certificate",
        "title_ar": "شهادة AutoCAD — الرسم الهندسي",
        "title_en": "AutoCAD — Engineering Drawing Certificate",
        "issuer_ar": "مركز تدريب هندسي",
        "issuer_en": "Engineering Training Centre",
        "date": "2022",
        "note_ar": "تدريب على الرسم الهندسي والإخراج: الطبقات، المقاسات، إعداد اللوحات بمقياس، والتصدير للطباعة.",
        "note_en": "Training in drafting and output: layers, dimensions, scaled sheet setup and print-ready export.",
    },
    {
        "file": "quantity.pdf",
        "type_ar": "شهادة", "type_en": "Certificate",
        "title_ar": "شهادة حساب الكميات",
        "title_en": "Quantity Surveying Certificate",
        "issuer_ar": "مركز هندسي معتمد",
        "issuer_en": "Certified Engineering Centre",
        "date": "2023",
        "note_ar": "حصر الكميات وإعداد الجداول: كميات الحفر والردم والخرسانة والأسفلت، وجداول BOQ والمستخلصات.",
        "note_en": "Take-off and scheduling: excavation, backfill, concrete and asphalt quantities, BOQ schedules and payment certificates.",
    },
    {
        "file": "id.pdf",
        "type_ar": "وثيقة", "type_en": "Document",
        "title_ar": "بطاقة الهوية المهنية",
        "title_en": "Professional ID Card",
        "issuer_ar": "جهة رسمية",
        "issuer_en": "Official authority",
        "date": "2024",
        "note_ar": "إثبات الهوية المهنية — تُعرض النسخة الكاملة عند الطلب أو في مرحلة التوظيف.",
        "note_en": "Professional identity proof — the full copy is provided on request or during the hiring stage.",
    },
]


def build_certificates(f: Fonts) -> None:
    """Bilingual cover sheet per document, so no link on the site is ever broken.

    The real scans are dropped into /public/certificates with the same file names.
    """
    DPI = 150
    W, H = 1240, 1754
    M = 90
    out_dir = PUB / "certificates"
    out_dir.mkdir(parents=True, exist_ok=True)

    for cert in CREDENTIALS:
        page = Image.new("RGB", (W, H), WHITE)
        d = ImageDraw.Draw(page)

        # header band
        d.rectangle((0, 0, W, 190), fill=NAVY)
        d.rectangle((0, 190, W, 196), fill=GOLD_DEEP)
        mark = build_mark(76)
        page.paste(mark, (W - M - 76, 44), mark)
        text_r(d, W - M - 96, 54, ar(NAME_AR), f("cairo-900", 30), WHITE)
        text_r(d, W - M - 96, 100, ar(ROLE_AR), f("plex-500", 18), GOLD_SOFT)
        d.text((M, 60), NAME_EN, font=f("plex-600", 17), fill=(255, 255, 255, 200))
        d.text((M, 88), "Surveying & Roads Engineer", font=f("plex-400", 14), fill=(255, 255, 255, 150))
        d.text((M, 122), SITE.replace("https://", ""), font=f("mono-400", 12), fill=(255, 255, 255, 150))

        y = 250
        text_r(d, W - M, y, ar("وثيقة مهنية — ورقة بيانات"), f("plex-700", 17), GOLD_DEEP)
        y += 34
        d.line((M, y, W - M, y), fill=(201, 212, 226), width=1)
        y += 44

        # document identity table
        rows = [
            ("النوع", cert["type_ar"], "Type", cert["type_en"]),
            ("الوثيقة", cert["title_ar"], "Document", cert["title_en"]),
            ("الجهة المُصدِرة", cert["issuer_ar"], "Issued by", cert["issuer_en"]),
            ("السنة", cert["date"], "Year", cert["date"]),
        ]
        for label_ar, value_ar, label_en, value_en in rows:
            d.rectangle((M, y, W - M, y + 76), outline=(226, 232, 240), width=1)
            d.line((M + 26, y, M + 26, y + 76), fill=(226, 232, 240), width=1)
            text_r(d, W - M - 26, y + 14, ar(label_ar), f("plex-500", 13), INK_3)
            text_r(d, W - M - 26, y + 38, ar(value_ar), f("plex-700", 15), INK)
            d.text((M + 46, y + 14), label_en, font=f("mono-400", 12), fill=INK_3)
            d.text((M + 46, y + 38), value_en, font=f("plex-600", 15), fill=INK)
            y += 92

        y += 6
        text_r(d, W - M, y + 4, ar(cert["note_ar"]), f("plex-400", 14), INK_2)
        d.text((M, y + 26), cert["note_en"], font=f("plex-400", 12.5), fill=INK_3)
        y += 76

        # status notice — explicit and honest
        d.rectangle((M, y, W - M, y + 148), fill=(247, 239, 218), outline=(200, 162, 74))
        text_r(d, W - M - 30, y + 20, ar("حالة الملف: هذه ورقة بيانات مصمّمة."), f("plex-700", 15), (138, 106, 31))
        text_r(d, W - M - 30, y + 50, ar("تُرفَق صورة الوثيقة الأصلية عند الطلب أو في مرحلة التوظيف مباشرة."), f("plex-400", 13.5), INK_2)
        d.text((M + 30, y + 84), "Status: this is a designed data sheet.", font=f("plex-600", 13), fill=(138, 106, 31))
        d.text((M + 30, y + 108), "The original scanned document is provided on request.", font=f("plex-400", 12), fill=INK_2)
        y += 190

        # footer: QR + contact
        d.line((M, H - 250, W - M, H - 250), fill=(201, 212, 226), width=1)
        qr_img = qrcode.make(SITE).convert("RGB").resize((120, 120), Image.LANCZOS)
        page.paste(qr_img, (M, H - 220))
        d.text((M + 140, H - 214), "Portfolio · CV · contact", font=f("plex-600", 13), fill=INK)
        d.text((M + 140, H - 190), SITE.replace("https://", ""), font=f("mono-400", 12), fill=INK_3)
        d.text((M + 140, H - 168), f"{EMAIL} · {PHONE}", font=f("mono-400", 12), fill=INK_3)
        text_r(d, W - M, H - 214, ar("محمد البخيتي علي — مهندس مساحة وطرق"), f("plex-600", 13), GOLD_DEEP)
        text_r(d, W - M, H - 188, ar("المملكة العربية السعودية · متاح للعمل"), f("plex-400", 12), INK_3)

        page.save(out_dir / cert["file"], resolution=DPI)

    print(f"· {len(CREDENTIALS)} credential cover sheets written")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--fonts", help="directory holding the TTFs (optional)")
    parser.add_argument("--only", default="favicons,qr,og,cv,certs", help="comma list: favicons,qr,og,cv,certs")
    args = parser.parse_args()

    tasks = {t.strip() for t in args.only.split(",") if t.strip()}
    needs_fonts = bool(tasks & {"og", "cv", "certs"})
    f = fetch_fonts(args.fonts) if needs_fonts else None

    if "favicons" in tasks:
        build_favicons()
    if "qr" in tasks:
        build_qr()
    if "og" in tasks and f:
        build_og(f)
    if "cv" in tasks and f:
        build_cv(f)
    if "certs" in tasks and f:
        build_certificates(f)

    print("done.")


if __name__ == "__main__":
    main()
