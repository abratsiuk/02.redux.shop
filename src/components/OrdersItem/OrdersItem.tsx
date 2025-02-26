import React from 'react';
import './OrdersItem.scss';
import { Link } from 'react-router-dom';

export interface IOrdersItemProps extends IOrdersItem {
    positionNumber: number;
}

export const OrdersItem: React.FC<IOrdersItemProps> = ({
    positionNumber,
    index,
    good,
    qty,
}) => {
    return (
        <div className="OrdersItem">
            <div className="cell OrdersItem__index">{positionNumber}</div>
        </div>
    );
};
