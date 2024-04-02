import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PromotionType, Result } from '../../types';

interface ItenaryReducerProps {
    visible: boolean,
    room: Result | null,
    promotion: PromotionType | null,
}

const initialState: ItenaryReducerProps = {
    visible: false,
    room: null,
    promotion: null
}

const itenaryReducer = createSlice({
    name: 'itenary',
    initialState: initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        setRoom: (state, action: PayloadAction<Result>) => {
            state.room = action.payload;
        },
        setPromotion: (state, action: PayloadAction<PromotionType>) => {
            state.promotion = action.payload;
        }
    }
});

export const { setVisible, setRoom, setPromotion } = itenaryReducer.actions;
export default itenaryReducer.reducer;

