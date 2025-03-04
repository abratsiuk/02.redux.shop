import { IGoodItem } from '../../interfaces/IGoodItem';
import { RootState } from '../root-reducer';
import { isRecordEmpty } from '../../utils/helpers';
import { IFieldInfo } from '../../interfaces/IFieldInfo';
import { getFieldsInfo, checkIsRelevant } from '../../utils/helpers';
import { IFilter } from '../../interfaces/IFilter';

export const selectGoodsInfo = (state: RootState) => ({
    status: state.goods.status,
    error: state.goods.error,
    qty: Object.values(state.goods.items).length,
});

export const selectAllGoods = (state: RootState): IGoodItem[] =>
    Object.values(state.goods.items);

export const selectFilteredGoods = (
    state: RootState,
    filter: IFilter
): IGoodItem[] =>
    Object.values(state.goods.items).filter((i) => checkIsRelevant(i, filter));

export const selectGoodById = (
    state: RootState,
    id: string
): IGoodItem | undefined => {
    return id ? state.goods.items[id] : undefined;
};

export const selectIsGoodsEmpty = (state: RootState): boolean =>
    isRecordEmpty(state.goods.items);

export const selectFieldInfo = (
    state: RootState,
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority',
    filter: IFilter
): IFieldInfo => {
    return getFieldsInfo(state.goods.items, field, filter);
};
