import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SearchFormState {
    startDate: string | null;
    endDate: string | null;
    adults: number;
    propertyName: string;
    numberOfRooms: number;
    totalGuests: number;
    teens: number;
    kids: number;
    beds: number;
}

const initialState: SearchFormState = {
    startDate: null,
    endDate: null,
    adults: 1,
    propertyName: "Team 1 Hotel",
    numberOfRooms: 1,
    totalGuests: 1,
    teens: 0,
    kids: 0,
    beds: 0
};

export const searchFormSlice = createSlice({
    name: "searchForm",
    initialState,
    reducers: {
        setStartDatePick: (state, action: PayloadAction<string | null>) => {
            state.startDate = action.payload;
        },
        setEndDatePick: (state, action: PayloadAction<string | null>) => {
            state.endDate = action.payload;
        },
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
        setKids: (state, action: PayloadAction<number>) => {
            state.kids = action.payload;
        },
        setTeens: (state, action: PayloadAction<number>) => {
            state.teens = action.payload;
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
        },
        setBeds: (state, action: PayloadAction<number>) => {
            state.beds = action.payload;
        }
    },
});

export const { setEndDatePick, setStartDatePick, setAdults, setNumberOfRooms, setTotalGuests, setPropertyName, setKids, setTeens, setBeds } = searchFormSlice.actions;
export default searchFormSlice.reducer;
