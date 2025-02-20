import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodsActionTypes, GoodsActions } from './goods-actions';

export enum GoodsStatus {
    IDLE = 'goods/idle',
    LOADING = 'goods/loading',
    RECEIVED = 'goods/received',
    REJECTED = 'goods/rejected',
}

export interface IGoodsState {
    status: GoodsStatus;
    error: string | null;
    list: IGoodItem[];
}

const initialState: IGoodsState = {
    status: GoodsStatus.IDLE,
    error: null,
    list: [],
};

export const goodsReducer = (
    state = initialState,
    action: GoodsActions
): IGoodsState => {
    switch (action.type) {
        case GoodsActionTypes.SET_GOODS:
            return {
                ...state,
                status: GoodsStatus.RECEIVED,
                error: null,
                list: action.payload,
            };
        case GoodsActionTypes.SET_LOADING:
            return { ...state, status: GoodsStatus.LOADING, error: null };
        case GoodsActionTypes.SET_ERROR:
            return {
                ...state,
                status: GoodsStatus.REJECTED,
                error: action.payload,
            };
        default:
            return state;
    }
};
