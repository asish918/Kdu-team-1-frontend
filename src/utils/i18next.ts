// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Translation } from "../types";
import { en } from "./internationalisation/en";
import { fr } from "./internationalisation/fr";
import { hn } from "./internationalisation/hn";

interface I18nResources {
  [key: string]: {
    translation: Translation;
  };
}

const resources: I18nResources = {
  en,
  fr,
  hn,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
