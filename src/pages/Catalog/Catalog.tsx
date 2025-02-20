import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { loadGoods } from '../../store/goods/goods-actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectAllGoods,
    selectGoodsInfo,
} from '../../store/goods/goods-selectors';
import './Catalog.scss';
import { GoodsList } from '../../components/GoodsList';
import { GoodsStatus } from '../../store/goods/goods-reducer';

export const Catalog: React.FC = () => {
    const goods = useTypedSelector(selectAllGoods);
    const { status, error, qty } = useTypedSelector(selectGoodsInfo);

    const dispatch = useDispatch();

    console.log('Catalog', goods);

    useEffect(() => {
        if (qty === 0) {
            dispatch(loadGoods());
            console.log('useEffect loadGoods');
        }
    }, [qty, dispatch]);

    return (
        <div className="Catalog">
            {status === GoodsStatus.LOADING && <h1>Loading...</h1>}
            {status === GoodsStatus.REJECTED && <h1>Error: {error}</h1>}
            <GoodsList goods={goods} />
        </div>
    );
};
