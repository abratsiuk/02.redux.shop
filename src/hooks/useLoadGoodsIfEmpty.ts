import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './useTypedSelector';
import { selectIsGoodsEmpty } from '../store/goods/goods-selectors';
import { loadGoods } from '../store/goods/goods-actions';

export const useLoadGoodsIfEmpty = () => {
    console.log('useLoadGoodsIfEmpty ');
    const dispatch = useDispatch();
    const isGoodsEmpty = useTypedSelector(selectIsGoodsEmpty);

    console.log('useLoadGoodsIfEmpty isGoodsEmpty', isGoodsEmpty);

    useEffect(() => {
        console.log('useLoadGoodsIfEmpty useEffect');
        if (isGoodsEmpty) {
            console.log('useLoadGoodsIfEmpty useEffect loadGoods');
            dispatch(loadGoods());
        }
    }, [isGoodsEmpty, dispatch]);
};
