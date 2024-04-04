import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
    step: number;
    checkoutStep: number;
}

const initialState: NavigationState = {
    step: 0,
    checkoutStep: 0,
};

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        increaseStep: (state) => {
            if (state.step < 2)
                state.step += 1;
        },
        decreaseStep: (state) => {
            if (state.step > 0)
                state.step -= 1;
        },
        resetStep: (state) => {
            state.step = 0;
        }
    },
});

export const { increaseStep, decreaseStep, resetStep } = navigationSlice.actions;
export default navigationSlice.reducer;
