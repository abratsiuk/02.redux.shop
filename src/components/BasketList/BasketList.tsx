import React from 'react';
import './BasketList.scss';
import { IBasketState } from '../../store/basket/basket-reducer';
import { BasketItem } from '../BasketItem';

export interface IBasketListProps extends IBasketState {}

export const BasketList: React.FC<IBasketListProps> = ({ items }) => {
    const position = Object.values(items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    return (
        <div className="BasketList">
            {position.map((item) => (
                <BasketItem
                    key={item.good.id}
                    {...item}
                />
            ))}
        </div>
    );
};
