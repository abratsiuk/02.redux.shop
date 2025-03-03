import React from 'react';
import './DevelopInfoItem.scss';
import { IPropsClassName } from '../../../interfaces/IPropsClassName';
import { IFieldInfoItem } from '../../../interfaces/IFieldInfoItem';

interface IFieldInfoItemProps extends IPropsClassName, IFieldInfoItem {}

export const DevelopInfoItem: React.FC<IFieldInfoItemProps> = ({
    className,
    name,
    count,
}) => {
    const classname = `${className} DevelopInfoItem`;

    return (
        <div className={classname}>
            <div className="DevelopInfoItem__name">{name}</div>
            <div className="DevelopInfoItem__count">{count}</div>
        </div>
    );
};
