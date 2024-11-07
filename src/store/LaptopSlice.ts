import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LaptopState {
    isOpen: boolean;
    isLoading: boolean;
}

const initialState: LaptopState = {
    isOpen: false,
    isLoading: false,
};

const laptopSlice = createSlice({
    name: 'laptopSlice',
    reducers: {
        openLaptop: (state) => {
            state.isOpen = true;
        },
        closeLaptop: (state) => {
            state.isOpen = false;
        },
        setLoadingStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
    initialState,
});

export const {
    openLaptop,
    closeLaptop,
    setLoadingStatus,
} = laptopSlice.actions;

export default laptopSlice.reducer;