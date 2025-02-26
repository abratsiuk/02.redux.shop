import { IBasketItem } from '../../interfaces/IBasketItem';
import { Dispatch } from 'redux';

export enum OrdersActionEnum {
    ADD_ORDER = '@@orders/ADD_ORDER',
    CANCEL_ORDER = '@@orders/CANCEL_ORDER',
    RECEIVE_ORDER = '@@orders/RECEIVE_ORDER',
    SET_ORDERS = '@@orders/SET_ORDERS',
    CLEAR_ORDERS = '@@orders/CLEAR_ORDERS',
}

export interface IAddOrderPayload {
    id: number;
    items: Record<string, IBasketItem>;
    totalQty: number;
    totalAmount: number;
    dateCreate: number;
}
interface IAddOrderAction {
    type: OrdersActionEnum.ADD_ORDER;
    payload: IAddOrderPayload;
}

export type OrdersActions = IAddOrderAction;

const addOrder = ({
    id,
    items,
    totalQty,
    totalAmount,
    dateCreate,
}: IAddOrderPayload): IAddOrderAction => ({
    type: OrdersActionEnum.ADD_ORDER,
    payload: { id, items, totalQty, totalAmount, dateCreate },
});

export const addOrderThunk = (items: Record<string, IBasketItem>) => {
    return async (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            addOrder({
                items,
                id: Date.now(),
                dateCreate: Date.now(),
                totalQty: Object.values(items).reduce(
                    (acc: number, item: IBasketItem) => acc + item.qty,
                    0
                ),
                totalAmount: Object.values(items).reduce(
                    (acc: number, item: IBasketItem) =>
                        acc + item.qty * item.good.price,
                    0
                ),
            })
        );
    };
};
