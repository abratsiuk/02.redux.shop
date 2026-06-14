import { IGoodItem } from '../../interfaces/IGoodItem';
import axios from 'axios';
import * as api from '../../config';
import { Dispatch } from 'redux';
import { IGrantedItem } from '../../interfaces/IGrantedItem';

export enum GoodsActionTypes {
    SET_GOODS = '@@goods/SET_GOODS',
    SET_LOADING = '@@goods/SET_LOADING',
    SET_ERROR = '@@goods/SET_ERROR',
}
interface ISetGoodsAction {
    type: GoodsActionTypes.SET_GOODS;
    payload: IGoodItem[];
}
interface ISetLoadingAction {
    type: GoodsActionTypes.SET_LOADING;
}
interface ISetErrorAction {
    type: GoodsActionTypes.SET_ERROR;
    payload: string;
}

export type GoodsActions =
    | ISetGoodsAction
    | ISetLoadingAction
    | ISetErrorAction;

export const setGoods = (goods: IGoodItem[]): ISetGoodsAction => ({
    type: GoodsActionTypes.SET_GOODS,
    payload: goods,
});

export const setLoading = (): ISetLoadingAction => ({
    type: GoodsActionTypes.SET_LOADING,
});

export const setError = (err: string): ISetErrorAction => ({
    type: GoodsActionTypes.SET_ERROR,
    payload: err,
});

export const loadGoods = () => {
    return async (dispatch: Dispatch<GoodsActions>) => {
        try {
            dispatch(setLoading());
            //TODO: client and api need to be used!
            const response = await axios.get(api.ALL_GOODS, {
                headers: {
                    Authorization: api.API_KEY,
                },
            });

            const entries = response?.data?.data?.entries ?? [];

            if (entries.length > 0) {
                const goods: IGoodItem[] = entries
                    .map((item: any, index: number): IGoodItem => {
                        const mainItem =
                            item.brItems?.[0] ?? item.instruments?.[0] ?? {};
                        const grantedItems = [
                            ...(item.brItems ?? []),
                            ...(item.instruments ?? []),
                        ];

                        return {
                            id:
                                item.offerId?.replace('v2:/', 'v2_') ||
                                index.toString(),
                            offerId: item.offerId ?? '',
                            name: mainItem.name ?? item.devName ?? '',
                            description: mainItem.description ?? '',
                            displayType:
                                mainItem.type?.displayValue ??
                                item.layout?.name ??
                                '',
                            mainType: mainItem.type?.value ?? '',
                            icon:
                                item.newDisplayAsset?.renderImages?.[0]
                                    ?.image ??
                                mainItem.images?.icon ??
                                mainItem.images?.large ??
                                mainItem.images?.small ??
                                '',
                            background:
                                item.newDisplayAsset?.renderImages?.[0]
                                    ?.image ??
                                mainItem.images?.icon ??
                                mainItem.images?.large ??
                                mainItem.images?.small ??
                                '',
                            colors: item.colors,
                            rarity: mainItem.rarity,
                            series: mainItem.set,
                            offerTag: null,
                            banner: null,
                            priority: item.sortPriority ?? 0,
                            price: item.regularPrice ?? item.finalPrice ?? 0,
                            granted: grantedItems
                                .map((grantedItem: any) => ({
                                    id: grantedItem.id,
                                    type:
                                        grantedItem.type?.displayValue ??
                                        grantedItem.type?.name ??
                                        '',
                                    name: grantedItem.name ?? '',
                                    icon:
                                        grantedItem.images?.icon ??
                                        grantedItem.images?.large ??
                                        grantedItem.images?.small ??
                                        grantedItem.images?.smallIcon ??
                                        '',
                                    description: grantedItem.description ?? '',
                                    partOfSet:
                                        grantedItem.set?.text ??
                                        grantedItem.set?.value ??
                                        '',
                                    qty: 1,
                                }))
                                .reduce(
                                    (
                                        acc: IGrantedItem[],
                                        item: IGrantedItem,
                                    ) => {
                                        const existsItem = acc.find(
                                            (i) => i.name === item.name,
                                        );

                                        if (existsItem) {
                                            existsItem.qty =
                                                (existsItem.qty ?? 0) + 1;
                                        } else {
                                            acc.push(item);
                                        }

                                        return acc;
                                    },
                                    [] as IGrantedItem[],
                                ),
                        };
                    })
                    .filter(
                        (item: IGoodItem) =>
                            item.background &&
                            item.id &&
                            (!item.mainType ||
                                !['sparks_song', 'w'].includes(
                                    item.mainType,
                                )) &&
                            item.name &&
                            !item.name.toLowerCase().includes('demon') &&
                            !item.name.toLowerCase().includes('darkest') &&
                            !item.name.toLowerCase().includes('diabol') &&
                            !item.name.toLowerCase().includes('beast') &&
                            !item.name.toLowerCase().includes('torment') &&
                            !item.name.toLowerCase().includes('burning') &&
                            !item.name.toLowerCase().includes('malice') &&
                            !item.name.toLowerCase().includes('dominion') &&
                            !item.name.toLowerCase().includes('furia') &&
                            !item.name.toLowerCase().includes('ghoul') &&
                            !item.name.toLowerCase().includes('devil'),
                    );

                dispatch(setGoods(goods));
            } else {
                dispatch(setGoods([]));
            }
        } catch (e) {
            dispatch(setError('good-action: ' + e.message));
        }
    };
};
