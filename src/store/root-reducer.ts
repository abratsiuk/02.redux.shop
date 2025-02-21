import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducer';
import { basketReducer } from './basket/basket-reducer';

export const rootReducer = combineReducers({
    goods: goodsReducer,
    basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
