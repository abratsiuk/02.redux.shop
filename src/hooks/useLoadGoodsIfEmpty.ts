import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector';
import { selectIsGoodsEmpty } from '../store/goods/goods-selectors';
import { loadGoods } from '../store/goods/goods-actions';

export const useLoadGoodsIfEmpty = () => {
    const dispatch = useDispatch();
    const isGoodsEmpty = useTypedSelector(selectIsGoodsEmpty);

    useEffect(() => {
        if (isGoodsEmpty) {
            dispatch(loadGoods());
        }
    }, [isGoodsEmpty, dispatch]);
};
