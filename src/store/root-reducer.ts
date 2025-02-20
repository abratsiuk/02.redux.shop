import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducer';
import { goodReducer } from './good/good-reducer';

export const rootReducer = combineReducers({
    goods: goodsReducer,
    good: goodReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
