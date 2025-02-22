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
import { Pagination } from '../../components/Pagination';

const pageSize = 20;
const pageNumber = 2;
export const Catalog: React.FC = () => {
    const goods = useTypedSelector(selectAllGoods);
    const { status, error, qty } = useTypedSelector(selectGoodsInfo);

    const dispatch = useDispatch();

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    useEffect(() => {
        if (qty === 0) {
            dispatch(loadGoods());
        }
    }, [qty, dispatch]);

    return (
        <div className="Catalog">
            {status === GoodsStatus.LOADING && <h1>Loading...</h1>}
            {status === GoodsStatus.REJECTED && <h1>Error: {error}</h1>}
            <Pagination
                pageCount={Math.ceil(goods.length / pageSize)}
                pageNumber={pageNumber}
            />
            <GoodsList goods={goods.slice(startIndex, endIndex)} />
        </div>
    );
};
