import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectGoodsInfo,
    selectFilteredGoods,
} from '../../store/goods/goods-selectors';
import './Catalog.scss';
import { GoodsList } from '../../components/GoodsList';
import { GoodsStatus } from '../../store/goods/goods-reducer';
import { CatalogSearch } from '../../components/CatalogSearch';
import { CatalogFilter } from '../../components/CatalogFilter';
import { Pagination } from '../../components/Pagination';
import { selectFilter } from '../../store/filter/filter-selectors';

export const Catalog: React.FC = () => {
    const filter = useTypedSelector(selectFilter);
    const filteredGoods = useTypedSelector((state) =>
        selectFilteredGoods(state, filter)
    );
    const { status, error } = useTypedSelector(selectGoodsInfo);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    const pageCount = Math.ceil(filteredGoods.length / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const handlePrev = () => {
        setPage((page) => (page > 1 ? page - 1 : 1));
    };
    const handleNext = () => {
        setPage((page) => (page < pageCount ? page + 1 : page));
    };
    // useEffect(() => {
    //     setPage(1);
    // }, [filteredGoods]);

    return (
        <div className="Catalog">
            {status === GoodsStatus.LOADING && <h1>Loading...</h1>}
            {status === GoodsStatus.REJECTED && <h1>Error: {error}</h1>}
            <CatalogSearch className="Catalog__CatalogSearch" />
            <CatalogFilter className="Catalog__CatalogFilter" />
            <GoodsList
                className="Catalog__GoodsList"
                goods={filteredGoods.slice(startIndex, endIndex)}
            />
            <Pagination
                className="Catalog__Pagination"
                pageCount={pageCount}
                pageNumber={page}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
};
