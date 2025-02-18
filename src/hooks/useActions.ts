import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GoodsActionCreator from '../store/goods/goods-actions';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(GoodsActionCreator, dispatch);
};
