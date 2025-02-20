import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducer';

export const rootReducer = combineReducers({
    goods: goodsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
