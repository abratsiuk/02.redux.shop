import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import axios from 'axios';
import * as api from '../config';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { client: axios, api },
            },
        }),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
