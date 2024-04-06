import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PromotionType, Result } from '../../types';

interface ItenaryReducerProps {
    visible: boolean,
    room: Result | null,
    promotion: PromotionType | null,
    occupancy_tax: number | null,
    taxes: number | null,
    vat: number | null,
    due_now: number | null,
    due_resort: number | null,
    promo_total: number | null,
    subtotal: number | null,
    resortFee: number | null
}

interface Extras {
    taxes: number;
    vat: number;
    due_percent: number;
    occupancy_tax: number;
    resortFee: number;
    total: number;
}

const initialState: ItenaryReducerProps = {
    visible: false,
    room: null,
    promotion: null,
    occupancy_tax: null,
    taxes: null,
    vat: null,
    promo_total: null,
    subtotal: null,
    due_now: null,
    due_resort: null,
    resortFee: null,
}

const itenaryReducer = createSlice({
    name: 'itenary',
    initialState: initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        setRoom: (state, action: PayloadAction<Result>) => {
            state.room = action.payload;
        },
        setPromotion: (state, action: PayloadAction<PromotionType>) => {
            state.promotion = action.payload;
        },
        setExtras: (state, action: PayloadAction<Extras>) => {
            state.subtotal = action.payload.total;
            state.occupancy_tax = action.payload.occupancy_tax * action.payload.total;
            state.taxes = action.payload.taxes * action.payload.total;
            state.vat = action.payload.vat * action.payload.total;
            state.promo_total = state.promotion?.price_factor * action.payload.total;
            state.due_now = action.payload.due_percent * action.payload.total;
            state.due_resort = action.payload.total - state.due_now;
            state.resortFee = action.payload.resortFee;
        }
    }
});

export const { setVisible, setRoom, setPromotion, setExtras } = itenaryReducer.actions;
export default itenaryReducer.reducer;

