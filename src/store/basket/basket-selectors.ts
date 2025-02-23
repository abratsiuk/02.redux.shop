import { RootState } from '../root-reducer';
import { IBasketState } from './basket-reducer';
import { IBasketItem } from '../../interfaces/IBasketItem';

export const isBasketEmpty = (items: Record<string, IBasketItem>): boolean => {
    for (const _ in items) {
        return false;
    }
    return true;
};
export const selectBasket = (state: RootState): IBasketState => state.basket;

export const selectBasketQty = (state: RootState): number => {
    if (isBasketEmpty(state.basket.items)) return 0;

    return Object.values(state.basket.items).reduce(
        (acc: number, item: IBasketItem) => acc + item.qty,
        0
    );
};

export const selectBasketAmount = (state: RootState): number => {
    if (isBasketEmpty(state.basket.items)) return 0;

    return Object.values(state.basket.items).reduce(
        (acc: number, item: IBasketItem) => acc + item.qty * item.good.price,
        0
    );
};
