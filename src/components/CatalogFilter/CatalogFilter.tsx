import React from 'react';
import './CatalogFilter.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';
import { CatalogFilterGroup } from '../CatalogFilterGroup';
import { selectFilter } from '../../store/filter/filter-selectors';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectFilteredGoods,
    selectFilterTypeInfo,
} from '../../store/goods/goods-selectors';
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../store/filter/filter-actions';

interface ICatalogFilterProps extends IPropsClassName {}

export const CatalogFilter: React.FC<ICatalogFilterProps> = ({ className }) => {
    const dispatch = useDispatch();
    const filter = useTypedSelector(selectFilter);
    const filteredGoods = useTypedSelector((state) =>
        selectFilteredGoods(state, filter)
    );
    const filterTypeInfo = useTypedSelector((state) =>
        selectFilterTypeInfo(state, filteredGoods, filter)
    );
    const classname = `${className} CatalogFilter`;
    return (
        <div className={classname}>
            <div className="CatalogFilter__header">
                <div>Filter</div>
                <ClearImg
                    className="filter-clear"
                    onClick={() => dispatch(clearFilter)}
                />
            </div>
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Main type:"
                field="mainType"
                fields={filterTypeInfo.mainType}
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Display type:"
                field="displayType"
                fields={filterTypeInfo.displayType}
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Rarity:"
                field="rarity"
                fields={filterTypeInfo.rarity}
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Series:"
                field="series"
                fields={filterTypeInfo.series}
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Banner:"
                field="banner"
                fields={filterTypeInfo.banner}
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Priority:"
                field="priority"
                fields={filterTypeInfo.priority}
            />
        </div>
    );
};
