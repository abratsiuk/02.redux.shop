import { IGoodItem } from '../../interfaces/IGoodItem';
import { RootState } from '../root-reducer';

export const selectGoodsInfo = (state: RootState) => ({
    status: state.goods.status,
    error: state.goods.error,
    qty: Object.values(state.goods.items).length,
});

export const selectAllGoods = (state: RootState): IGoodItem[] =>
    Object.values(state.goods.items);

export const selectSelectedGoods = (
    state: RootState
): IGoodItem | undefined => {
    const selectedId = state.goods.selectedId;
    return selectedId ? state.goods.items[selectedId] : undefined;
};
