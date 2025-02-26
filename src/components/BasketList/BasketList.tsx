import React from 'react';
import './BasketList.scss';
import { IBasketState } from '../../store/basket/basket-reducer';
import { BasketItem } from '../BasketItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketAmount } from '../../store/basket/basket-selectors';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../store/orders/orders-actions';
import { clearBasket } from '../../store/basket/basket-actions';

export interface IBasketListProps extends IBasketState {}

export const BasketList: React.FC<IBasketListProps> = ({ items }) => {
    const dispatch = useDispatch();

    const amount = useTypedSelector(selectBasketAmount);
    const positions = Object.values(items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );

    const handleCheckout = () => {
        dispatch(addOrder(items));
        dispatch(clearBasket());
        console.log(clearBasket);
    };

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
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};
