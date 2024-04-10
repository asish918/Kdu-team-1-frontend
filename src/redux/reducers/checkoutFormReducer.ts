import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TravellerInfo {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

interface BillingInfo {
    firstName: string;
    lastName: string;
    mailingAddress1: string;
    mailingAddress2: string;
    country: string;
    city: string;
    state: string;
    zipcode: string;
    phone: string;
    email: string;
}

interface CheckoutFormReducer {
    traveller_info: TravellerInfo;
    billing_info: BillingInfo;
}

const initialState: CheckoutFormReducer = {
    traveller_info: {
        email: "",
        firstName: "",
        lastName: "",
        phone: ""
    },
    billing_info: {
        city: "",
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        mailingAddress1: "",
        mailingAddress2: "",
        phone: "",
        state: "",
        zipcode: ""
    }
}

const checkoutFormReducer = createSlice({
    name: 'checkoutFormReducer',
    initialState: initialState,
    reducers: {
        setTravellerInfo: (state, action: PayloadAction<TravellerInfo>) => {
            state.traveller_info = action.payload;
        },
        setBillingInfo: (state, action: PayloadAction<BillingInfo>) => {
            state.billing_info = action.payload;
        }
    }
})

export const { setTravellerInfo, setBillingInfo } = checkoutFormReducer.actions;
export default checkoutFormReducer.reducer;