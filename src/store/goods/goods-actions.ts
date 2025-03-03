import { IGoodItem } from '../../interfaces/IGoodItem';
import axios from 'axios';
import * as api from '../../config';
import { Dispatch } from 'redux';

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

            if (response?.data?.shop?.length > 0) {
                const goods: IGoodItem[] = response.data.shop
                    .map(
                        (item: any, index: number): IGoodItem => ({
                            id:
                                item.offerId?.replace('v2:/', 'v2_') ||
                                index.toString(),
                            offerId: item.offerId ?? '',
                            name: item.displayName ?? '',
                            description: item.displayDescription ?? '',
                            displayType: item.displayType ?? '',
                            mainType: item.mainType ?? '',
                            icon: item.displayAssets?.[0]?.url ?? '',
                            background:
                                item.displayAssets?.[0]?.background ?? '',
                            colors: item.colors,
                            rarity: item.rarity,
                            series: item.series,
                            offerTag: item.offerTag,
                            banner: item.banner,
                            priority: item.priority,
                            price: item.price ? item.price.regularPrice : 0,
                        })
                    )
                    .filter(
                        (item: IGoodItem) =>
                            item.background &&
                            item.id &&
                            (!item.mainType ||
                                !['sparks_song', 'w'].includes(
                                    item.mainType
                                )) &&
                            item.name &&
                            /* filter out ugly and unpleasant things */
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
                            !item.name.toLowerCase().includes('torment')
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
