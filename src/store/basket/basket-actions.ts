import { IGoodInBasket } from '../../interfaces/IGoodInBasket';

export enum BasketActionTypes {
    ADD_TO_BASKET = 'basket/ADD_TO_BASKET',
    UPDATE_IN_BASKET = 'basket/UPDATE_IN_BASKET',
    DELETE_FROM_BASKET = 'basket/DELETE_FROM_BASKET',
    CLEAR_BASKET = 'basket/CLEAR_BASKET',
}

interface IUpdateBasketPayload {
    id: string;
    qty: number;
}

interface IAddToBasketAction {
    type: BasketActionTypes.ADD_TO_BASKET;
    payload: IGoodInBasket;
}
interface IUpdateInBasketAction {
    type: BasketActionTypes.UPDATE_IN_BASKET;
    payload: IUpdateBasketPayload;
}
interface IDeleteFromBasketAction {
    type: BasketActionTypes.DELETE_FROM_BASKET;
    payload: string;
}

interface IClearBasketAction {
    type: BasketActionTypes.CLEAR_BASKET;
}

export type BasketActions =
    | IAddToBasketAction
    | IUpdateInBasketAction
    | IDeleteFromBasketAction
    | IClearBasketAction;

export const addToBasket = (good: IGoodInBasket): IAddToBasketAction => ({
    type: BasketActionTypes.ADD_TO_BASKET,
    payload: good,
});

export const updateInBasket = ({
    id,
    qty,
}: IUpdateBasketPayload): IUpdateInBasketAction => ({
    type: BasketActionTypes.UPDATE_IN_BASKET,
    payload: { id, qty },
});

export const deleteFromBasket = (id: string): IDeleteFromBasketAction => ({
    type: BasketActionTypes.DELETE_FROM_BASKET,
    payload: id,
});

export const clearBasket = (): IClearBasketAction => ({
    type: BasketActionTypes.CLEAR_BASKET,
});
