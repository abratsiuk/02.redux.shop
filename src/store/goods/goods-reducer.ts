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
    items: { [id: string]: IGoodItem };
    selectedId: string | null;
}

const initialState: IGoodsState = {
    status: GoodsStatus.IDLE,
    error: null,
    items: {},
    selectedId: null,
};

export const goodsReducer = (
    state = initialState,
    action: GoodsActions
): IGoodsState => {
    switch (action.type) {
        case GoodsActionTypes.SET_GOODS:
            const newItems = action.payload.reduce(
                (acc: { [id: string]: IGoodItem }, item: IGoodItem) => {
                    acc[item.id] = item;
                    return acc;
                },
                {}
            );
            return {
                ...state,
                status: GoodsStatus.RECEIVED,
                error: null,
                items: newItems,
            };
        case GoodsActionTypes.SET_LOADING:
            return { ...state, status: GoodsStatus.LOADING, error: null };
        case GoodsActionTypes.SET_ERROR:
            return {
                ...state,
                status: GoodsStatus.REJECTED,
                error: action.payload,
            };
        case GoodsActionTypes.SELECT_GOOD:
            return {
                ...state,
                selectedId: action.payload,
            };
        default:
            return state;
    }
};
