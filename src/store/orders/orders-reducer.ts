import { OrdersActions, OrdersActionEnum } from './orders-actions';
import { produce } from 'immer';
import { IOrder } from '../../interfaces/IOrder';

export enum OrderStateEnum {
    CREATED = 'CREATED',
    RECEIVED = 'RECEIVED',
    CANCELED = 'CANCELED',
}

export interface IOrdersState {
    orders: IOrder[];
}
const initialState: IOrdersState = { orders: [] };

export const ordersReducer = (
    state = initialState,
    action: OrdersActions
): IOrdersState => {
    return produce(state, (draftState) => {
        switch (action.type) {
            case OrdersActionEnum.ADD_ORDER:
                draftState.orders.push({
                    id: action.payload.id,
                    items: action.payload.items,
                    totalQty: action.payload.totalQty,
                    totalAmount: action.payload.totalAmount,
                    dateCreate: action.payload.dateCreate,
                    state: OrderStateEnum.CREATED,
                    dateReceive: null,
                    dateCancel: null,
                });
                break;
            case OrdersActionEnum.CANCEL_ORDER:
                const orderCancelled = draftState.orders.find(
                    (item) => item.id === action.payload.id
                );
                if (orderCancelled) {
                    orderCancelled.dateCancel = action.payload.dateCancel;
                }
                break;
            case OrdersActionEnum.RECEIVE_ORDER:
                const orderReceived = draftState.orders.find(
                    (item) => item.id === action.payload.id
                );
                if (orderReceived) {
                    orderReceived.dateCancel = action.payload.dateReceive;
                }
                break;
            case OrdersActionEnum.CLEAR_ORDERS:
                return initialState;
            default:
                break;
        }
    });
};
