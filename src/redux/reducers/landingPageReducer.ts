import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LandingPageState {
    adults: number;
    propertyName: string;
    numberOfRooms: number;
    totalGuests: number;
}

const initialState: LandingPageState = {
    adults: 1,
    propertyName: "",
    numberOfRooms: 1,
    totalGuests: 1,
};

// Utility function to validate conditions
const validateConditions = (state: LandingPageState): boolean => {
    // Check if the number of adults is less than 1
    if (state.adults < 1) {
        return false;
    }
    // Check if the number of rooms is less than 1
    if (state.numberOfRooms < 1) {
        return false;
    }
    // Check if the number of rooms is greater than the number of adults
    if (state.numberOfRooms > state.adults) {
        return false;
    }
    return true;
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
