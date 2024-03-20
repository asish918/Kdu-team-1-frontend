import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LandingPageState {
    adults: number;
    propertyName: string;
    numberOfRooms: number;
    totalGuests: number;
}

const initialState: LandingPageState = {
    adults: 1,
    propertyName: "Team 1 Hotel",
    numberOfRooms: 1,
    totalGuests: 1,
};

export const landingPageReducer = createSlice({
    name: "landingPage",
    initialState,
    reducers: {
        setPropertyName: (state, action: PayloadAction<string>) => {
            state.propertyName = action.payload
        },
        setAdults: (state, action: PayloadAction<number>) => {
            if (action.payload < 1 || action.payload < state.numberOfRooms) {
                return;
            }
            if (state.numberOfRooms > action.payload) {
                state.numberOfRooms = action.payload;
            }
            state.adults = action.payload;
            state.totalGuests = action.payload;
        },
        setNumberOfRooms: (state, action: PayloadAction<number>) => {
            if (action.payload < 1) {
                return;
            }
            if (action.payload > state.adults) {
                state.adults = action.payload;
                state.totalGuests = action.payload;
            }
            state.numberOfRooms = action.payload;
        },
        setTotalGuests: (state, action: PayloadAction<number>) => {
            state.totalGuests = action.payload
        }
    }
});

export const { setAdults, setNumberOfRooms, setTotalGuests, setPropertyName } = landingPageReducer.actions;
export default landingPageReducer.reducer;
