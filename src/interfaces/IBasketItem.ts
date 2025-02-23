import { IGoodInBasket } from './IGoodInBasket';

export interface IBasketItem {
    index: number;
    good: IGoodInBasket;
    qty: number;
}
