import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import {thunk} from 'redux-thunk';
import laptopReducer from "./LaptopSlice";
import keyboardReducer from "./keyboardSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        laptopReducer,
        keyboardReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLogger(),thunk),
});

export default store;