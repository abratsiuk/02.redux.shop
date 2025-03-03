import React from 'react';
import './CatalogSearch.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface ICatalogSearchProps extends IPropsClassName {}

export const CatalogSearch: React.FC<ICatalogSearchProps> = ({ className }) => {
    const classname = `${className} CatalogSearch`;

    return <div className={classname}>CatalogSearch</div>;
};
