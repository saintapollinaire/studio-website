import fr from './fr';
import en from './en';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export type Strings = typeof fr;
const dictionaries: Record<Locale, Strings> = { fr, en };

export function t(locale: Locale): Strings {
  return dictionaries[locale];
}

/**
 * Pages of the site. Each page has one slug per locale.
 * The home page has an empty slug. Order defines the navigation order.
 */
export const pages = {
  home: { fr: '', en: '' },
  work: { fr: 'realisations', en: 'work' },
  method: { fr: 'methode', en: 'method' },
  about: { fr: 'a-propos', en: 'about' },
  contact: { fr: 'contact', en: 'contact' },
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageId = keyof typeof pages;

/** Pages shown in the main navigation, in order. */
export const navPages: Exclude<PageId, 'home'>[] = ['work', 'method', 'about', 'contact'];

export function pathFor(page: PageId, locale: Locale): string {
  const slug = pages[page][locale];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
