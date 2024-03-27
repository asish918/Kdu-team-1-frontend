import { i18n as i18nType } from "i18next";
import i18nFunction from "i18next";
import { initReactI18next } from "react-i18next";
import { ExchangeRateData, Translation } from "../types";
import { en } from "./internationalisation/en";
import { fr } from "./internationalisation/fr";
import { hn } from "./internationalisation/hn";
import { Currency } from "./enums";

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

export const formatCurrency = (amount: number, currency: string, exchangeRate: ExchangeRateData, i18n: i18nType) => {
  switch (currency) {
    case Currency.INR:
      return new Intl.NumberFormat(i18n.language, {
        style: "currency",
        currency: Currency.INR,
      }).format(amount * exchangeRate.data[Currency.INR]);
    case Currency.USD:
      return new Intl.NumberFormat(i18n.language, {
        style: "currency",
        currency: Currency.USD,
      }).format(amount);
    case Currency.EUR:
      return new Intl.NumberFormat(i18n.language, {
        style: "currency",
        currency: Currency.EUR,
      }).format(amount * exchangeRate.data[Currency.EUR]);
    default:
      return amount;
  }
};

i18nFunction.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18nFunction;
