#!/usr/bin/env python3
"""
Build the brand + document assets for the portfolio.

    python3 scripts/build-assets.py [--fonts DIR] [--only favicons,qr,og]

Generates (all inside /public):
    favicon.svg · favicon.ico · favicon-16/32 · apple-touch-icon ·
    android-chrome-192/512 · og-image.jpg (1200x630) ·
    qr/site.png · qr/whatsapp.png

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
NAVY = (10, 18, 25)
NAVY_700 = (16, 26, 36)
GOLD = (46, 203, 185)
GOLD_DEEP = (14, 143, 134)
GOLD_SOFT = (233, 239, 245)
PAPER = (245, 247, 250)
WHITE = (255, 255, 255)
INK = (12, 24, 37)
INK_2 = (60, 76, 95)
INK_3 = (102, 118, 135)
LINE = (226, 232, 240)

SITE = "https://engmohammeda.github.io/portfolio/"
WHATSAPP = "https://wa.me/966566743293"
EMAIL = "Mohammedalbkhyty@gmail.com"
PHONE = "+966 56 674 3293"
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
  <rect width="64" height="64" rx="14" fill="#0A1219"/>
  <path d="M19.2 62 L44.8 62 L36.8 10 L27.2 10 Z" fill="#2ECBB9"/>
  <rect x="15.4" y="8.6" width="33.2" height="1.6" fill="#E9EFF5"/>
  <path d="M30.9 21 L33.1 21 L34.5 34 L29.5 34 Z" fill="#0A1219"/>
  <path d="M30.0 38 L34.0 38 L35.9 50 L28.1 50 Z" fill="#0A1219"/>
  <path d="M27.6 54 L36.4 54 L38.6 62 L25.4 62 Z" fill="#0A1219"/>
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
        d.arc((560 - i * 26, -60 + i * 22, 1240 + i * 16, 300 + i * 22), 200, 340, fill=(46, 203, 185, 42), width=1)

    # sheet frame + corner ticks
    d.rectangle((26, 26, W - 26, H - 26), outline=(255, 255, 255, 40), width=1)
    for cx, cy, sx, sy in ((26, 26, 1, 1), (W - 26, 26, -1, 1), (26, H - 26, 1, -1), (W - 26, H - 26, -1, -1)):
        d.line((cx, cy, cx + 28 * sx, cy), fill=GOLD, width=2)
        d.line((cx, cy, cx, cy + 28 * sy), fill=GOLD, width=2)

    # ---- sheet header (drawn left-to-right: Latin block sits at the top-left)
    mark = build_mark(66)
    img.paste(mark, (66, 64), mark)
    tracking(d, (150, 72), "MOHAMMED AL-BAKHITY", f("mono-600", 19), GOLD_SOFT, 2)
    tracking(d, (150, 100), "PORTFOLIO · REV 4.0 · 2026", f("mono-400", 14), (255, 255, 255, 130), 2)

    # ---- name / role (right-aligned to COL)
    text_r(d, COL, 152, ar(NAME_AR), f("cairo-900", 54), WHITE)
    text_r(d, COL, 228, ar("مهندس مساحة وطرق — مساحة · طرق · كميات · GIS"), f("plex-600", 23), GOLD_SOFT)

    # ---- capability chips
    x = COL
    for cap in ["مساحة", "طرق", "كميات", "CAD", "GIS", "تقارير"]:
        label = ar(cap) if any("\u0600" <= c <= "\u06ff" for c in cap) else cap
        font = f("plex-500", 18) if label != cap else f("mono-400", 16)
        box_w = d.textlength(label, font=font) + 26
        d.rounded_rectangle((x - box_w, 278, x, 316), radius=7, outline=(46, 203, 185, 130), width=1)
        text_r(d, x - 13, 286, label, font, (255, 255, 255, 235))
        x -= box_w + 9

    # ---- deliverables
    d.line((72, 348, COL, 348), fill=(255, 255, 255, 45), width=1)
    text_r(d, COL, 366, ar("المخرجات: مخططات DWG · جداول كميات XLSX · خرائط GIS · تقارير"),
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
    for value, lab in [("6", "خدمات"), ("7", "مشاريع"), ("12", "أداة عمل")]:
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
    tracking(d, (66, H - 52), f"SAUDI ARABIA · {PHONE}", f("mono-400", 16), (255, 255, 255, 155), 1)
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


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--fonts", help="directory holding the TTFs (optional)")
    parser.add_argument("--only", default="favicons,qr,og", help="comma list: favicons,qr,og")
    args = parser.parse_args()

    tasks = {t.strip() for t in args.only.split(",") if t.strip()}
    f = fetch_fonts(args.fonts) if "og" in tasks else None

    if "favicons" in tasks:
        build_favicons()
    if "qr" in tasks:
        build_qr()
    if "og" in tasks and f:
        build_og(f)

    print("done.")


if __name__ == "__main__":
    main()
