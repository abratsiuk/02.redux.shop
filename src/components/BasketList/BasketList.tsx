import React from 'react';
import './BasketList.scss';
import { IBasketState } from '../../store/basket/basket-reducer';
import { BasketItem } from '../BasketItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketAmount } from '../../store/basket/basket-selectors';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/orders/orders-actions';
import { clearBasket } from '../../store/basket/basket-actions';
import { decreaseFunds } from '../../store/funds/funds-actions';
import { selectFunds } from '../../store/funds/funds-selectors';

export interface IBasketListProps extends IBasketState {}

export const BasketList: React.FC<IBasketListProps> = ({ items }) => {
    const dispatch = useDispatch();

    const amount = useTypedSelector(selectBasketAmount);
    const positions = Object.values(items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    const funds = useTypedSelector(selectFunds);

    const isFundsEnough = funds >= amount;

    const handleCheckout = () => {
        if (!isFundsEnough) return;

        dispatch(createOrder(items));
        dispatch(decreaseFunds(amount));
        dispatch(clearBasket());
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
                {isFundsEnough ? (
                    <button onClick={handleCheckout}>Checkout</button>
                ) : (
                    <p className="BasketList__notEnought">Not enough funds</p>
                )}
            </div>
        </div>
    );
};
