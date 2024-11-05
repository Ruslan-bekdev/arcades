import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ArcadesState {
    clickableKeys: number[];
}

const initialState: ArcadesState = {
    clickableKeys: []
};

const arcadesSlice = createSlice({
    name: 'arcadesSlice',
    reducers: {
        setClickableKeys: (state, action: PayloadAction<number[]>) => {
            state.clickableKeys = action.payload;
        }
    },
    initialState,
});

export const {
    setClickableKeys
} = arcadesSlice.actions;

export default arcadesSlice.reducer;