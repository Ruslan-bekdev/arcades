import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LaptopState {
    isOpen: boolean;
}

const initialState: LaptopState = {
    isOpen: true,
};

const laptopSlice = createSlice({
    name: 'laptopSlice',
    reducers: {
        openLaptop: (state) => {
            state.isOpen = true;
        },
        closeLaptop: (state) => {
            state.isOpen = false;
        }
    },
    initialState,
});

export const {
    openLaptop,
    closeLaptop,
} = laptopSlice.actions;

export default laptopSlice.reducer;