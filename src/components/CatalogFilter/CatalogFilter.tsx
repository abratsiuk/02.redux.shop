import React from 'react';
import './CatalogFilter.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';
import { CatalogFilterItem } from '../CatalogFilterItem';

interface ICatalogFilterProps extends IPropsClassName {}

export const CatalogFilter: React.FC<ICatalogFilterProps> = ({ className }) => {
    const classname = `${className} CatalogFilter`;

    return (
        <div className={classname}>
            <div className="CatalogFilter__header">
                <div>Filter</div>
                <ClearImg className="filter-clear" />
            </div>
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Main type:"
                field="mainType"
            />
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Display type:"
                field="displayType"
            />
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Rarity:"
                field="rarity"
            />
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Series:"
                field="series"
            />
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Banner:"
                field="banner"
            />
            <CatalogFilterItem
                className="CatalogFilter__section"
                name="Priority:"
                field="priority"
            />
        </div>
    );
};
