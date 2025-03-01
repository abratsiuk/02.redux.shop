import React from 'react';
import './OrdersItemLongItem.scss';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { Link } from 'react-router-dom';

export interface IOrdersItemLongItem extends IBasketItem {
    positionNumber: number;
}

export const OrdersItemLongItem: React.FC<IOrdersItemLongItem> = ({
    positionNumber,
    id,
    name,
    description,
    displayType,
    mainType,
    icon,
    price,
    qty,
}) => {
    return (
        <div className="OrdersItemLongItem">
            <img
                className="OrdersItemLongItem__image"
                src={icon}
                alt={name}
            />
            <div className="OrdersItemLongItem__name">
                <Link to={`/catalog/${id}`}>{name}</Link>
            </div>
            <div className="OrdersItemLongItem__type">{displayType}</div>
            <div className="OrdersItemLongItem__price">
                {price} x {qty}
            </div>
            <div className="OrdersItemLongItem__number">{price * qty}</div>
        </div>
    );
};
