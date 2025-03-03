import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectAllGoods,
    selectGoodsInfo,
} from '../../store/goods/goods-selectors';
import './Catalog.scss';
import { GoodsList } from '../../components/GoodsList';
import { GoodsStatus } from '../../store/goods/goods-reducer';
import { CatalogSearch } from '../../components/CatalogSearch';
import { CatalogFilter } from '../../components/CatalogFilter';
import { CatalogFilterInfo } from '../../components/CatalogFilterInfo';
import { Pagination } from '../../components/Pagination';

const pageSize = 25;
const pageNumber = 1;
export const Catalog: React.FC = () => {
    const goods = useTypedSelector(selectAllGoods);
    const { status, error } = useTypedSelector(selectGoodsInfo);

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
        <div className="Catalog">
            {status === GoodsStatus.LOADING && <h1>Loading...</h1>}
            {status === GoodsStatus.REJECTED && <h1>Error: {error}</h1>}
            <CatalogSearch className="Catalog__CatalogSearch" />
            <CatalogFilter className="Catalog__CatalogFilter" />
            <GoodsList
                className="Catalog__GoodsList"
                goods={goods.slice(startIndex, endIndex)}
            />
            <Pagination
                className="Catalog__Pagination"
                pageCount={Math.ceil(goods.length / pageSize)}
                pageNumber={pageNumber}
            />
            <CatalogFilterInfo className="Catalog__CatalogFilterInfo" />
        </div>
    );
};
