import React from 'react';
import './OrdersItemLongItem.scss';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { Link } from 'react-router-dom';

export interface IOrdersItemLongItem extends IBasketItem {
    positionNumber: number;
}

export const OrdersItemLongItem: React.FC<IOrdersItemLongItem> = ({
    positionNumber,
    index,
    good,
    qty,
}) => {
    return (
        <div className="OrdersItemLongItem">
            <img
                className="OrdersItemLongItem__image"
                src={good.icon}
                alt={good.name}
            />
            <div className="OrdersItemLongItem__name">
                <Link to={`/catalog/${good.id}`}>{good.name}</Link>
            </div>
            <div className="OrdersItemLongItem__type">{good.displayType}</div>
            <div className="OrdersItemLongItem__price">
                {good.price} x {qty}
            </div>
            <div className="OrdersItemLongItem__number">{good.price * qty}</div>
        </div>
    );
};
