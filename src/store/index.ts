import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import {thunk} from 'redux-thunk';
import arcadesReducer from "./arcadesSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        arcadesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLogger(),thunk),
});

export default store;