import { RootState } from '../root-reducer';
import { IOrdersState } from './orders-reducer';

export const selectOrders = (state: RootState): IOrdersState =>
    state.orders.orders;
