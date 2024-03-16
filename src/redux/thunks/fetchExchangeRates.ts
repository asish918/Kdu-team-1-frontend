import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExchangeRateData } from "../../types";
import axios from "axios";

export const fetchExchangeRates = createAsyncThunk(
    'exchangeRates/fetch',
    async (): Promise<ExchangeRateData> => {
        // const response = await axios.get(`${process.env.EXCHANGE_RATES_API}`)
        const exchangeRates: ExchangeRateData = {
            data: {
                "AUD": 1.5197401908,
                "BGN": 1.78449024,
                "BRL": 4.9945205144,
                "CAD": 1.3537902346,
                "CHF": 0.8841801576,
                "CNY": 7.1931911821,
                "CZK": 23.1167325214,
                "DKK": 6.8492109843,
                "EUR": 0.9186600924,
                "GBP": 0.7845001527,
                "HKD": 7.8197213492,
                "HRK": 6.6411610491,
                "HUF": 362.8132465728,
                "IDR": 15560.212555554,
                "ILS": 3.654370549,
                "INR": 82.9355999982,
                "ISK": 135.9316142401,
                "JPY": 148.2898149386,
                "KRW": 1320.8442616032,
                "MXN": 16.6945224405,
                "MYR": 4.6857308415,
                "NOK": 10.5640519565,
                "NZD": 1.6326402143,
                "PHP": 55.3894283336,
                "PLN": 3.9424004131,
                "RON": 4.5664906066,
                "RUB": 91.3681800592,
                "SEK": 10.3438520301,
                "SGD": 1.3358901445,
                "THB": 35.7695946481,
                "TRY": 32.1887557196,
                "USD": 1,
                "ZAR": 18.7278625923
            }
        };

        return exchangeRates as ExchangeRateData;
    }
);