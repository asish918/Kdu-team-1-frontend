import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterSortState {
    bedTypes: string[] | null,
    roomTypes: number[] | null,
    priceSort: boolean,
    kduMember: boolean,
    seniorCitizen?: boolean,
    military?: boolean,
}

const initialState: FilterSortState = {
    bedTypes: null,
    roomTypes: null,
    priceSort: true,
    kduMember: true
};

export const filterSortSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        setBedTypes: (state, action: PayloadAction<string[] | null>) => {
            state.bedTypes = [...action.payload!];
        },
        setRoomTypes: (state, action: PayloadAction<number[] | null>) => {
            state.roomTypes = [...action.payload!];
        },
        setPriceSort: (state, action: PayloadAction<boolean>) => {
            state.priceSort = action.payload;
        },
        setSeniorCitizen: (state, action: PayloadAction<boolean>) => {
            state.seniorCitizen = action.payload;
        },
        setMilitary: (state, action: PayloadAction<boolean>) => {
            state.military = action.payload;
        }
    },
});

export const { setBedTypes, setRoomTypes, setPriceSort, setSeniorCitizen, setMilitary } = filterSortSlice.actions;
export default filterSortSlice.reducer;
