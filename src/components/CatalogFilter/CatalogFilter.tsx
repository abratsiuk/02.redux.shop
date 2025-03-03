import React from 'react';
import './CatalogFilter.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface ICatalogFilterProps extends IPropsClassName {}

export const CatalogFilter: React.FC<ICatalogFilterProps> = ({ className }) => {
    const classname = `${className} CatalogFilter`;

    return <div className={classname}>CatalogFilter</div>;
};
