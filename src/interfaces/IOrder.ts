import { IBasketItem } from './IBasketItem';
import { OrderStateEnum } from '../store/orders/orders-reducer';

export interface IOrder {
    id: number;
    items: Record<string, IBasketItem>;
    totalQty: number;
    totalAmount: number;
    state: OrderStateEnum;
    dateCreate: number;
    dateReceive: number | null;
    dateCancel: number | null;
}
