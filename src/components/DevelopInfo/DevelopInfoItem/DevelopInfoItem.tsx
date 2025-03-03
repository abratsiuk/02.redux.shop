import React from 'react';
import './DevelopInfoItem.scss';
import { IPropsClassName } from '../../../interfaces/IPropsClassName';
import { IDevelopInfoItem } from '../IDevelopInfoItem';

interface IDevelopInfoItemProps extends IPropsClassName, IDevelopInfoItem {}

export const DevelopInfoItem: React.FC<IDevelopInfoItemProps> = ({
    className,
    name,
    count,
    description,
}) => {
    const classname = `${className} DevelopInfoItem`;

    return (
        <div className={classname}>
            <div className="DevelopInfoItem__name">{name}</div>
            <div className="DevelopInfoItem__count">{count}</div>
            <div className="DevelopInfoItem__description">{description}</div>
        </div>
    );
};
