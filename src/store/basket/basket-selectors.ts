import { RootState } from '../root-reducer';
import { IBasketState } from './basket-reducer';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { isRecordEmpty } from '../../utils/helpers';

export const isBasketEmpty = (items: Record<string, IBasketItem>): boolean =>
    isRecordEmpty(items);

export const selectBasket = (state: RootState): IBasketState => state.basket;

export const selectBasketQty = (state: RootState): number => {
    if (isRecordEmpty(state.basket.items)) return 0;

    return Object.values(state.basket.items).reduce(
        (acc: number, item: IBasketItem) => acc + item.qty,
        0
    );
};

export const selectBasketAmount = (state: RootState): number => {
    if (isRecordEmpty(state.basket.items)) return 0;

    return Object.values(state.basket.items).reduce(
        (acc: number, item: IBasketItem) => acc + item.qty * item.good.price,
        0
    );
};

export const selectIsBasketEmpty = (state: RootState): boolean =>
    isRecordEmpty(state.basket.items);
