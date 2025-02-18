import React from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadGoods } from '../../store/goods/goods-actions';
// import {
//     selectAllGoods,
//     selectGoodsInfo,
// } from '../../store/goods/goods-selectors';
import './Catalog.scss';
import { GoodsList } from '../../components/GoodsList';

export const Catalog: React.FC = () => {
    // const goods = useSelector(selectAllGoods);
    // const { status, error, qty } = useSelector(selectGoodsInfo);
    // const dispatch = useDispatch();

    // console.log('Catalog', qty);

    // useEffect(() => {
    //     if (qty === 0) {
    //         dispatch(loadGoods());
    //     }
    // }, [qty, dispatch]);

    return (
        <div className="Catalog">
            <GoodsList />
        </div>
    );
};
