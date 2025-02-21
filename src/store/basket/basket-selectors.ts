import { RootState } from '../root-reducer';
import { IBasketState } from './basket-reducer';
import { IBasketItem } from '../../interfaces/IBasketItem';

const isBasketEmpty = (state: RootState): boolean => {
    for (const _ in state.basket.items) {
        return false;
    }
    return true;
};
export const selectBasket = (state: RootState): IBasketState => state.basket;

export const selectBasketLength = (state: RootState): number => {
    if (isBasketEmpty(state)) return 0;

    return Object.values(state.basket.items).length;
};

export const selectBasketAmount = (state: RootState): number => {
    if (isBasketEmpty(state)) return 0;

    return Object.values(state.basket.items).reduce(
        (acc: number, item: IBasketItem) => acc + item.qty * item.good.price,
        0
    );
};
