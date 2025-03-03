import { IGoodItem } from '../../interfaces/IGoodItem';
import { RootState } from '../root-reducer';
import { isRecordEmpty } from '../../utils/helpers';
import { IDevelopInfo } from '../../components/DevelopInfo/IDevelopInfo';

export const selectGoodsInfo = (state: RootState) => ({
    status: state.goods.status,
    error: state.goods.error,
    qty: Object.values(state.goods.items).length,
});

export const selectAllGoods = (state: RootState): IGoodItem[] =>
    Object.values(state.goods.items);

export const selectGoodById = (
    state: RootState,
    id: string
): IGoodItem | undefined => {
    return id ? state.goods.items[id] : undefined;
};

export const selectIsGoodsEmpty = (state: RootState): boolean =>
    isRecordEmpty(state.goods.items);

export const selectDevelopInfo = (
    state: RootState,
    field: string
): IDevelopInfo => {
    const result = Object.values(state.goods.items).reduce(
        (acc: IDevelopInfo, item) => {
            let fieldValue: string | undefined | null = '';
            if (field === 'mainType' || field === 'displayType') {
                fieldValue = item[field];
            }
            if (
                field === 'rarity' ||
                field === 'series' ||
                field === 'banner'
            ) {
                fieldValue = item[field]?.name;
            }
            if (field === 'offerTag') {
                fieldValue = item[field]?.text;
            }
            if (field === 'priority') {
                fieldValue = item[field]?.toString();
            }
            const name =
                fieldValue === undefined
                    ? 'undefined'
                    : fieldValue === null
                    ? 'null'
                    : fieldValue.trim() === ''
                    ? 'empty'
                    : fieldValue.trim();
            const description = '';
            const existingItem = acc.items.find((i) => i.name === name);
            if (existingItem) {
                existingItem.count = existingItem.count + 1;
            } else {
                acc.items.push({ name, count: 1, description });
            }
            return acc;
        },
        { items: [] } as IDevelopInfo
    );
    result.items.sort((a, b) => ((a.name || '') >= (b.name || '') ? 1 : -1));
    return result;
};
