import React from 'react';
import './BasketItem.scss';
import { IBasketItem } from '../../interfaces/IBasketItem';

export interface IBasketItemProps extends IBasketItem {}

export const BasketItem: React.FC<IBasketItemProps> = ({
    index,
    good,
    qty,
}) => {
    return (
        <div className="BasketItem">
            <div>{index}</div>
            <img
                className="BasketItem__image"
                src={good.icon}
                alt={good.name}
            />
            <div>{good.name}</div>
            <div>{good.price}</div>

            <div>{qty}</div>
        </div>
    );
};
