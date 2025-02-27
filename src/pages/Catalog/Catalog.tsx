import React from 'react';
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
    const { status, error } = useTypedSelector(selectGoodsInfo);

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

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
