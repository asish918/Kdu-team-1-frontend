import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterSortState {
    bedTypes: string[] | null,
    roomTypes: number[] | null,
    priceSort: boolean
}

const initialState: FilterSortState = {
    bedTypes: null,
    roomTypes: null,
    priceSort: true
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
        }
    },
});

export const { setBedTypes, setRoomTypes, setPriceSort } = filterSortSlice.actions;
export default filterSortSlice.reducer;
