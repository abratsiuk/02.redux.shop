import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as api from '../config';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelis: ['basket', 'orders', 'funds'],
    blacklist: ['goods'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({
                client: axios,
                api,
            })
        )
    )
);

export const persistor = persistStore(store);
