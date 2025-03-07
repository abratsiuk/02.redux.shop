import { RootState } from '../root-reducer';
import { IBasketState } from './basket-reducer';
import { IBasketItem } from '../../interfaces/IBasketItem';

export const selectBasket = (state: RootState): IBasketState => state.basket;

export const selectGoodInBasket = (state: RootState, id: string): boolean =>
    state.basket.items.some((item: IBasketItem) => item.id === id);

export const selectBasketQty = (state: RootState): number => {
    if (state.basket.items.length === 0) return 0;

    return state.basket.items.reduce(
        (acc: number, item: IBasketItem) => acc + item.qty,
        0
    );
};

export const selectBasketAmount = (state: RootState): number => {
    if (state.basket.items.length === 0) return 0;

    return state.basket.items.reduce(
        (acc: number, item: IBasketItem) => acc + item.qty * item.price,
        0
    );
};

export const selectIsBasketEmpty = (state: RootState): boolean =>
    state.basket.items.length === 0;
