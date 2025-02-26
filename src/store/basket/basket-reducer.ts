import { BasketActionTypes, BasketActions } from './basket-actions';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { produce } from 'immer';
import { isRecordEmpty } from '../../utils/helpers';

export interface IBasketState {
    items: Record<string, IBasketItem>;
}

const initialState: IBasketState = {
    items: {} as Record<string, IBasketItem>,
};

export const basketReducer = (
    state = initialState,
    action: BasketActions
): IBasketState => {
    return produce(state, (draftState) => {
        switch (action.type) {
            case BasketActionTypes.ADD_TO_BASKET:
                const good = action.payload;
                const nextIndex = isRecordEmpty(draftState.items)
                    ? 0
                    : Math.max(
                          ...Object.values(draftState.items).map(
                              (item) => item.index
                          )
                      ) + 1;
                if (good.id in draftState.items) {
                    draftState.items[good.id].qty += 1;
                } else {
                    draftState.items[good.id] = {
                        index: nextIndex,
                        good,
                        qty: 1,
                    };
                }
                break;
            case BasketActionTypes.UPDATE_IN_BASKET:
                const { id: idUpdated, qty } = action.payload;
                if (idUpdated in draftState.items) {
                    draftState.items[idUpdated].qty = qty;
                }
                break;
            case BasketActionTypes.DELETE_FROM_BASKET:
                const idDelete = action.payload;
                if (idDelete in draftState.items) {
                    delete draftState.items[idDelete];
                }
                break;
            case BasketActionTypes.CLEAR_BASKET:
                return initialState;

            default:
                break;
        }
    });
};
