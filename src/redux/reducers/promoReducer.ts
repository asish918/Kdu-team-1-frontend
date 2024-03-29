import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, HotelProperties } from '../../types';
import { fetchPropertyConfig } from '../thunks/fetchPropertyConfig';

interface PromoReducerProps {
    promo: HotelProperties,
    message: string,
    status: APIStatus
}

const initialState: PropertyConfig = {
    property: {
        accessibility: false,
        bannerImageUrl: "",
        guests: {
            adults: true,
            children: false,
            teens: false,
        },
        maxGuests: 5,
        maxLengthStay: 1,
        numberOfRooms: 5,
        siteLogoUrl: "",
        footerLogoUrl: ""
    },
    message: "",
    status: null,
}

const hotePropertyConfig = createSlice({
    name: 'promoCode',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPropertyConfig.fulfilled, (state, action: PayloadAction<HotelProperties>) => {
            state.property = action.payload;
            state.status = 'success';
            state.message = "Property Config fetched successfully";
            console.log(state.property)
        });
        builder.addCase(fetchPropertyConfig.pending, (state) => {
            state.message = "Property Config loading";
            state.status = 'loading';
        });
        builder.addCase(fetchPropertyConfig.rejected, (state) => {
            state.message = "Error occurred while fetching Property Config";
            state.status = 'error';
        });
    },
});

export default hotePropertyConfig.reducer;

