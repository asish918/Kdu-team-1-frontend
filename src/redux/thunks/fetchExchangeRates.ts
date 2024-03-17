import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExchangeRateData } from "../../types";
import axios from "axios";
import { prodUrlGenerator, urlGenerator } from "../../utils/util";

export const fetchExchangeRates = createAsyncThunk(
    'exchangeRates/fetch',
    async (): Promise<ExchangeRateData> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axios.get(prodUrlGenerator(`${process.env.EXCHANGE_RATES_API}`))
            return response.data as ExchangeRateData;
        }
        const response = await axios.get(urlGenerator(`${process.env.EXCHANGE_RATES_API}`));
        return response.data as ExchangeRateData;
    }
);