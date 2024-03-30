import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, PromoCodeType } from '../../types';
import { validatePromoCode } from '../thunks/validatePromo';

interface PromoReducerProps {
    promo: PromoCodeType | null,
    message: string,
    status: APIStatus
}

const initialState: PromoReducerProps = {
    promo: null,
    message: "",
    status: null,
}

const promoReducer = createSlice({
    name: 'promoCode',
    initialState: initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(validatePromoCode.fulfilled, (state, action: PayloadAction<PromoCodeType>) => {
            state.promo = action.payload;
            state.status = 'success';
            state.message = "Promo Code Valid";
        });
        builder.addCase(validatePromoCode.pending, (state) => {
            state.message = "Promo Code loading";
            state.status = 'loading';
        });
        builder.addCase(validatePromoCode.rejected, (state) => {
            state.message = "Invalid Promo Code";
            state.status = 'error';
        });
    },
});

export const { resetStatus } = promoReducer.actions;
export default promoReducer.reducer;

