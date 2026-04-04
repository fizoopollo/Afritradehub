/**
 * i18n config for Afritradehub (English, French, Arabic, Swahili, Portuguese).
 * Wire this in app/layout or a provider and use useTranslation() in components.
 */
export const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
  { code: "sw", name: "Kiswahili" },
  { code: "pt", name: "Português" },
] as const;

export type Locale = (typeof supportedLanguages)[number]["code"];

export const defaultLocale: Locale = "en";
