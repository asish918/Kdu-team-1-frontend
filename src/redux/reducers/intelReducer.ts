import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { APIStatus, ExchangeRateData } from "../../types";
import { fetchExchangeRates } from "../thunks/fetchExchangeRates";
import { Currency } from "../../utils/util";

interface IntelState {
    exchangeRates: ExchangeRateData | null;
    activeCurrency: string;
    message: string;
    status: APIStatus
}

const initialState: IntelState = {
    exchangeRates: null,
    activeCurrency: Currency.USD,
    message: "",
    status: null
};

export const intelReducer = createSlice({
    name: "intelData",
    initialState,
    reducers: {
        setActiveCurrency: (state, action: PayloadAction<string>) => {
            state.activeCurrency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExchangeRates.fulfilled, (state, action: PayloadAction<ExchangeRateData>) => {
            state.exchangeRates = action.payload;
            state.status = 'success';
            state.message = "Exchange Rates fetched successfully";
        });
        builder.addCase(fetchExchangeRates.pending, (state) => {
            state.message = "Exchange Rates loading";
            state.status = 'loading';
        });
        builder.addCase(fetchExchangeRates.rejected, (state) => {
            state.message = "Error occurred while fetching Exchange Rates";
            state.status = 'error';
        });
    },
});

export const { setActiveCurrency } = intelReducer.actions;
export default intelReducer.reducer;
