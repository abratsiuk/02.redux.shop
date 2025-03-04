import { RootState } from '../root-reducer';
import { IOrder } from '../../interfaces/IOrder';

export const selectOrders = (state: RootState): IOrder[] =>
    [...state.orders.orders].sort((a, b) =>
        a.dateCreate > b.dateCreate ? -1 : 1
    );

export const selectOrdersLength = (state: RootState): number =>
    state.orders.orders.length;
