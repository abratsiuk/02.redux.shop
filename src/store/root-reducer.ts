import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducer';
import { basketReducer } from './basket/basket-reducer';
import { ordersReducer } from './orders/orders-reducer';
import { fundsReducer } from './funds/funds-reducer';
import { filterReducer } from './filter/filter-reducer';

export const rootReducer = combineReducers({
    goods: goodsReducer,
    basket: basketReducer,
    orders: ordersReducer,
    funds: fundsReducer,
    filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
