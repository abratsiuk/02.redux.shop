import { RootState } from '../root-reducer';
import { IOrder } from './orders-reducer';

export const selectOrders = (state: RootState): IOrder[] => state.orders.orders;
