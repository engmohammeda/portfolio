import { assetUrl } from './utils';
import { printResume } from './links';

export const CV_PATH = 'cv/mohammed-albakhity-cv.pdf';

/**
 * Opens the packaged CV PDF. The file in /public/cv is a generated,
 * always-current copy of the professional sheet (see scripts/build-assets.py),
 * so the download can never be stale relative to the site content.
 * If it is missing for any reason, we fall back to the print sheet.
 */
export async function downloadCv(lang: 'ar' | 'en'): Promise<void> {
  const url = assetUrl(CV_PATH);
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) throw new Error('missing');
  } catch {
    if (lang === 'ar') {
      // eslint-disable-next-line no-console
      console.warn('CV file not found — opening the print sheet instead.');
    }
    printResume();
    return;
  }
  const a = document.createElement('a');
  a.href = url;
  a.download = `Mohammed-Al-Bakhity-CV-${lang.toUpperCase()}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
