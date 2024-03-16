import { i18n } from "i18next";
import { ExchangeRateData } from "../types";

export enum Currency {
  AUD = "AUD",
  BGN = "BGN",
  BRL = "BRL",
  CAD = "CAD",
  CHF = "CHF",
  CNY = "CNY",
  CZK = "CZK",
  DKK = "DKK",
  EUR = "EUR",
  GBP = "GBP",
  HKD = "HKD",
  HRK = "HRK",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  ISK = "ISK",
  JPY = "JPY",
  KRW = "KRW",
  MXN = "MXN",
  MYR = "MYR",
  NOK = "NOK",
  NZD = "NZD",
  PHP = "PHP",
  PLN = "PLN",
  RON = "RON",
  RUB = "RUB",
  SEK = "SEK",
  SGD = "SGD",
  THB = "THB",
  TRY = "TRY",
  USD = "USD",
  ZAR = "ZAR"
}

export function urlGenerator(path: string) {
  return `${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/${path}`;
}

export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export const formatCurrency = (amount: number, currency: string, exchangeRate: ExchangeRateData, i18n: i18n) => {
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
