import { identity } from '../data';

/** WhatsApp deep link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${identity.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
}

/** mailto: link with subject + optional body. */
export function mailLink(subject: string, body = ''): string {
  const parts = [`subject=${encodeURIComponent(subject)}`];
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${identity.email}?${parts.join('&')}`;
}

/** tel: link. */
export function telLink(): string {
  return `tel:${identity.phone}`;
}

/**
 * vCard 3.0 as a data URI — lets the visitor save the contact to their phone
 * directly from the page (works on iOS/Android contact apps).
 */
export function vcardUri(lang: 'ar' | 'en'): string {
  const name = lang === 'ar' ? identity.nameAr : identity.nameEn;
  const title = lang === 'ar' ? 'مهندس مساحة وطرق' : 'Surveying & Roads Engineer';
  const location = lang === 'ar' ? identity.locationAr : identity.locationEn;
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${identity.nameEn.split(' ').reverse().join(';')}`,
    `FN:${name}`,
    `ORG:${name}`,
    `TITLE:${title}`,
    `TEL;TYPE=CELL:${identity.phone}`,
    `EMAIL;TYPE=INTERNET:${identity.email}`,
    `URL:${identity.site}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${identity.linkedin}`,
    `ADR;TYPE=WORK:;;${location};;;;`,
    `NOTE:${title} — ${identity.site}`,
    'END:VCARD',
  ];
  return `data:text/vcard;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`;
}

/** Human date + time of the last content update. */
export function updatedLabel(lang: 'ar' | 'en', iso = identity.updated): string {
  const [y, m] = iso.split('-');
  return lang === 'ar' ? `${m}/${y}` : `${y}-${m}`;
}
