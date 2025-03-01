import { BasketActionTypes, BasketActions } from './basket-actions';
import { IBasketItem } from '../../interfaces/IBasketItem';

export interface IBasketState {
    items: IBasketItem[];
}

const initialState: IBasketState = {
    items: [],
};

export const basketReducer = (
    state = initialState,
    action: BasketActions
): IBasketState => {
    switch (action.type) {
        case BasketActionTypes.ADD_TO_BASKET:
            if (state.items.some((item) => item.id === action.payload.id)) {
                return {
                    items: state.items.map((item) => {
                        return item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item;
                    }),
                };
            } else {
                return {
                    items: [...state.items, { ...action.payload, qty: 1 }],
                };
            }

        case BasketActionTypes.UPDATE_IN_BASKET:
            return {
                items: state.items.map((item) => {
                    return item.id === action.payload.id
                        ? { ...item, qty: action.payload.qty }
                        : item;
                }),
            };
        case BasketActionTypes.DELETE_FROM_BASKET:
            return {
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case BasketActionTypes.CLEAR_BASKET:
            return {
                items: [],
            };

        default:
            return state;
    }
};
