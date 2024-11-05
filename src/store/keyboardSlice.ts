import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface KeyboardState {
    rgbEffect: boolean;
    clickableKeys: number[];
}

const initialState: KeyboardState = {
    rgbEffect: false,
    clickableKeys: [],
};

const keyboardSlice = createSlice({
    name: 'keyboardSlice',
    reducers: {
        toggleRgbEffect: (state) => {
          state.rgbEffect = !state.rgbEffect;
        },
        setClickableKeys: (state, action: PayloadAction<number[]>) => {
            state.clickableKeys = action.payload;
        }
    },
    initialState,
});

export const {
    toggleRgbEffect,
    setClickableKeys,
} = keyboardSlice.actions;

export default keyboardSlice.reducer;