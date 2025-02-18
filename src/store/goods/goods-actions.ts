import { IGoodItem } from '../../interfaces/IGoodItem';
export const SET_GOODS = '@@countries/SET_GOODS';
export const SET_LOADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';

export const setGoods = (goods: IGoodItem[]) => ({
    type: SET_GOODS,
    payload: goods,
});

export const setLoading = () => ({ type: SET_LOADING });

export const setError = (err: string) => ({ type: SET_ERROR, payload: err });

export const loadGoods =
    () =>
    (dispatch, _, { client, api }) => {
        dispatch(setLoading());

        client
            .get(api.ALL_GOODS)
            .then(({ data }) => dispatch(setGoods(data)))
            .catch((err) => dispatch(setError(err.message)));
    };
