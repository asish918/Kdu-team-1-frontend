import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExchangeRateData } from "../../types";
import { axiosRequest, prodUrlGenerator, urlGenerator } from "../../utils/util";

export const fetchExchangeRates = createAsyncThunk(
    'exchangeRates/fetch',
    async (): Promise<ExchangeRateData> => {
        const isProduction = process.env.NODE_ENV === "production";
        if (isProduction) {
            const response = await axiosRequest(prodUrlGenerator(`${process.env.EXCHANGE_RATES_API}`))
            return response.data as ExchangeRateData;
        }
        const response = await axiosRequest(urlGenerator(`${process.env.EXCHANGE_RATES_API}`));
        return response.data as ExchangeRateData;
    }
);