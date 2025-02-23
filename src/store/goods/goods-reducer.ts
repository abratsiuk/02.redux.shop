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
    items: Record<string, IGoodItem>;
}

const initialState: IGoodsState = {
    status: GoodsStatus.IDLE,
    error: null,
    items: {},
};

export const goodsReducer = (
    state = initialState,
    action: GoodsActions
): IGoodsState => {
    switch (action.type) {
        case GoodsActionTypes.SET_GOODS:
            const newItems = action.payload.reduce(
                (acc: Record<string, IGoodItem>, item: IGoodItem) => {
                    acc[item.id] = item;
                    return acc;
                },
                {} as Record<string, IGoodItem>
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
        default:
            return state;
    }
};
