import { RootState } from '../root-reducer';
import { IOrder } from './orders-reducer';

export const selectOrders = (state: RootState): IOrder[] => state.orders.orders;

export const selectOrdersLength = (state: RootState): number =>
    state.orders.orders.length;
