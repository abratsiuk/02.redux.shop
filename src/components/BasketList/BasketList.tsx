import React from 'react';
import './BasketList.scss';
import { IBasketState } from '../../store/basket/basket-reducer';
import { BasketItem } from '../BasketItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketAmount } from '../../store/basket/basket-selectors';

export interface IBasketListProps extends IBasketState {}

export const BasketList: React.FC<IBasketListProps> = ({ items }) => {
    const amount = useTypedSelector(selectBasketAmount);
    const positions = Object.values(items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    return (
        <div className="BasketList">
            {positions.map((item, index) => (
                <BasketItem
                    key={item.good.id}
                    {...item}
                    positionNumber={index + 1}
                />
            ))}
            <div className="BasketList__totalRow">
                <span className="cell BasketList__totalText">Total:</span>
                <div className="cell BasketList__totalNumber">{amount}</div>
            </div>
            <div className="cell BasketList__control">
                <button>Checkout</button>
            </div>
        </div>
    );
};
