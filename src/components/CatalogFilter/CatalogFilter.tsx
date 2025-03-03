import React from 'react';
import './CatalogFilter.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';
import { CatalogFilterGroup } from '../CatalogFilterGroup';

interface ICatalogFilterProps extends IPropsClassName {}

export const CatalogFilter: React.FC<ICatalogFilterProps> = ({ className }) => {
    const classname = `${className} CatalogFilter`;

    return (
        <div className={classname}>
            <div className="CatalogFilter__header">
                <div>Filter</div>
                <ClearImg className="filter-clear" />
            </div>
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Main type:"
                field="mainType"
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Display type:"
                field="displayType"
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Rarity:"
                field="rarity"
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Series:"
                field="series"
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Banner:"
                field="banner"
            />
            <CatalogFilterGroup
                className="CatalogFilter__section"
                name="Priority:"
                field="priority"
            />
        </div>
    );
};
