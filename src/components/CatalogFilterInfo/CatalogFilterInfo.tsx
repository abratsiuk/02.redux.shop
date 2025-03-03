import React from 'react';
import './CatalogFilterInfo.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface ICatalogFilterInfoProps extends IPropsClassName {}

export const CatalogFilterInfo: React.FC<ICatalogFilterInfoProps> = ({
    className,
}) => {
    const classname = `${className} CatalogFilterInfo`;

    return <div className={classname}>CatalogFilterInfo</div>;
};
