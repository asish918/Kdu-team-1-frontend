import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus, Property } from '../../types';
import { fetchPropertyList } from '../thunks/fetchPropertyList';

interface PropertyConfig {
    propertyList: Property[],
    message: string,
    status: APIStatus
}

const initialState: PropertyConfig = {
    propertyList: [],
    message: "",
    status: null,
}

const propertyListConfig = createSlice({
    name: 'propertyList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPropertyList.fulfilled, (state, action: PayloadAction<Property[]>) => {
            state.propertyList = action.payload;
            state.status = 'success';
            state.message = "Property List fetched successfully";
        });
        builder.addCase(fetchPropertyList.pending, (state) => {
            state.message = "Property List loading";
            state.status = 'loading';
        });
        builder.addCase(fetchPropertyList.rejected, (state) => {
            state.message = "Error occurred while fetching Property List";
            state.status = 'error';
        });
    },
});

export default propertyListConfig.reducer;

