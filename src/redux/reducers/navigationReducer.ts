import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NavigationState {
    step: number;
}

const initialState: NavigationState = {
    step: 0,
};

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setStepRedux: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
    },
});

export const { setStepRedux } = navigationSlice.actions;
export default navigationSlice.reducer;
