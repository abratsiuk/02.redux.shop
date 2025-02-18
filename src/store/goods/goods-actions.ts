import { Dispatch } from 'redux';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { axios } from 'axios';
import * as api from '../../config';
import { AxiosResponse } from 'axios';

export const enum GoodsActionTypes {
    SET_GOODS = 'goods/SET_GOODS',
    SET_LOADING = 'goods/SET_LOADING',
    SET_ERROR = 'goods/SET_ERROR',
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

export const loadGoods = () => (dispatch: Dispatch<GoodsActions>) => {
    dispatch(setLoading());

    interface IApiResponse {
        shop: Array<{
            offerId: string;
            displayName: string;
            displayDescription: string;
            displayAssets: Array<{
                full_background: string;
            }>;
            price: {
                regularPrice: number;
            };
        }>;
    }

    axios
        .get<IApiResponse>(api.ALL_GOODS)
        .then(function (response: AxiosResponse<IApiResponse>) {
            console.log(response);
        })
        .then((response: AxiosResponse<IApiResponse>) => {
            const goods: IGoodItem[] = response.data.shop
                .map(
                    (item): IGoodItem => ({
                        id: item.offerId.replace('v2:/', 'v2_'),
                        name: item.displayName,
                        description: item.displayDescription,
                        full_background:
                            item.displayAssets && item.displayAssets.length > 0
                                ? item.displayAssets[0].full_background ?? ''
                                : '',
                        price: item.price ? item.price.regularPrice : 0,
                    })
                )
                .filter((item: IGoodItem) => item.full_background && item.id);
            dispatch(setGoods(goods));
        })
        .catch((err: Error) => {
            dispatch(setError(err.message));
        });
};
