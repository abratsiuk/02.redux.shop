import { IGoodItem } from '../../interfaces/IGoodItem';
import { RootState } from '../root-reducer';

export const selectGoodsInfo = (state: RootState) => ({
    status: state.goods.status,
    error: state.goods.error,
    qty: state.goods.list.length,
});

export const selectAllGoods = (state: RootState): IGoodItem[] =>
    state.goods.list;
