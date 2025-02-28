import { IBasketItem } from '../../interfaces/IBasketItem';
import { Dispatch } from 'redux';

export enum OrdersActionEnum {
    CREATE_ORDER = '@@orders/CREATE_ORDER',
    CANCEL_ORDER = '@@orders/CANCEL_ORDER',
    ACCEPT_ORDER = '@@orders/ACCEPT_ORDER',
    CLEAR_ORDERS = '@@orders/CLEAR_ORDERS',
}

interface ICreateOrderPayload {
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
interface IAcceptOrderPayload {
    id: number;
    dateReceive: number;
}

interface ICreateOrderAction {
    type: OrdersActionEnum.CREATE_ORDER;
    payload: ICreateOrderPayload;
}
interface ICancelOrderAction {
    type: OrdersActionEnum.CANCEL_ORDER;
    payload: ICancelOrderPayload;
}
interface IAcceptOrderAction {
    type: OrdersActionEnum.ACCEPT_ORDER;
    payload: IAcceptOrderPayload;
}

interface IClearOrdersAction {
    type: OrdersActionEnum.CLEAR_ORDERS;
}

export type OrdersActions =
    | ICreateOrderAction
    | IAcceptOrderAction
    | ICancelOrderAction
    | IClearOrdersAction;

const createOrderAction = ({
    id,
    items,
    totalQty,
    totalAmount,
    dateCreate,
}: ICreateOrderPayload): ICreateOrderAction => ({
    type: OrdersActionEnum.CREATE_ORDER,
    payload: { id, items, totalQty, totalAmount, dateCreate },
});
export const createOrder = (items: Record<string, IBasketItem>) => {
    return async (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            createOrderAction({
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

const acceptOrderAction = ({
    id,
    dateReceive,
}: IAcceptOrderPayload): IAcceptOrderAction => ({
    type: OrdersActionEnum.ACCEPT_ORDER,
    payload: { id, dateReceive },
});
export const acceptOrder =
    (id: number) => (dispatch: Dispatch<OrdersActions>) => {
        dispatch(
            acceptOrderAction({
                id,
                dateReceive: Date.now(),
            })
        );
    };

export const clearOrders = (): IClearOrdersAction => ({
    type: OrdersActionEnum.CLEAR_ORDERS,
});
