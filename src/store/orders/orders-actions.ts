import { IBasketItem } from '../../interfaces/IBasketItem';
import { Dispatch } from 'redux';

export enum OrdersActionEnum {
    ADD_ORDER = '@@orders/ADD_ORDER',
    CANCEL_ORDER = '@@orders/CANCEL_ORDER',
    RECEIVE_ORDER = '@@orders/RECEIVE_ORDER',
    CLEAR_ORDERS = '@@orders/CLEAR_ORDERS',
}

interface IAddOrderPayload {
    id: number;
    items: Record<string, IBasketItem>;
    totalQty: number;
    totalAmount: number;
    dateCreate: number;
}
interface ICancelOrderPayload {
    id: number;
    dateCancel: number;
}
interface IReceiveOrderPayload {
    id: number;
    dateReceive: number;
}

interface IAddOrderAction {
    type: OrdersActionEnum.ADD_ORDER;
    payload: IAddOrderPayload;
}
interface ICancelOrderAction {
    type: OrdersActionEnum.CANCEL_ORDER;
    payload: ICancelOrderPayload;
}
interface IReceiveOrderAction {
    type: OrdersActionEnum.RECEIVE_ORDER;
    payload: IReceiveOrderPayload;
}
interface IClearOrdersAction {
    type: OrdersActionEnum.CLEAR_ORDERS;
}

export type OrdersActions =
    | IAddOrderAction
    | ICancelOrderAction
    | IReceiveOrderAction
    | IClearOrdersAction;

const addOrderAction = ({
    id,
    items,
    totalQty,
    totalAmount,
    dateCreate,
}: IAddOrderPayload): IAddOrderAction => ({
    type: OrdersActionEnum.ADD_ORDER,
    payload: { id, items, totalQty, totalAmount, dateCreate },
});
export const addOrder = (items: Record<string, IBasketItem>) => {
    return async (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            addOrderAction({
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

const cancelOrderAction = ({
    id,
    dateCancel,
}: ICancelOrderPayload): ICancelOrderAction => ({
    type: OrdersActionEnum.CANCEL_ORDER,
    payload: { id, dateCancel },
});
export const cancelOrder =
    (id: number) => (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            cancelOrderAction({
                id,
                dateCancel: Date.now(),
            })
        );
    };

const receiveOrderAction = ({
    id,
    dateReceive,
}: IReceiveOrderPayload): IReceiveOrderAction => ({
    type: OrdersActionEnum.RECEIVE_ORDER,
    payload: { id, dateReceive },
});
export const receiveOrder =
    (id: number) => (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            receiveOrderAction({
                id,
                dateReceive: Date.now(),
            })
        );
    };

export const clearOrders = (): IClearOrdersAction => ({
    type: OrdersActionEnum.CLEAR_ORDERS,
});
