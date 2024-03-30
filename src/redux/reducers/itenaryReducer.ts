import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItenaryReducerProps {
    visible: boolean,
}

const initialState: ItenaryReducerProps = {
    visible: false,
}

const itenaryReducer = createSlice({
    name: 'itenary',
    initialState: initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        }
    }
});

export const { setVisible } = itenaryReducer.actions;
export default itenaryReducer.reducer;

