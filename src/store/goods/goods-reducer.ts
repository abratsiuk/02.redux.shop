import { SET_GOODS, SET_LOADING, SET_ERROR } from './goods-actions';

const initialState = {
    status: 'idle' /* loading, received, rejected */,
    error: null,
    list: [],
};

export const goodsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_GOODS:
            return { ...state, status: 'received', error: null, list: payload };
        case SET_LOADING:
            return { ...state, status: 'loading', error: null };
        case SET_ERROR:
            return { ...state, status: 'rejected', error: payload };
        default:
            return state;
    }
};
