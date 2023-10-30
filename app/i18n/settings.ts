export const i18n = {
  defaultLocale: "English",
  locales: ["English", "Arabic"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function getOptions(
  lng: string = i18n.defaultLocale,
  ns: string = "translation"
) {
  return {
    debug: false,
    supportedLngs: i18n.locales,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: i18n.defaultLocale,
    defaultNS: "translation",
    ns,
  };
}
