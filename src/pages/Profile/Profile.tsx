import React from 'react';
import './Profile.scss';
import { FundsSymbol } from '../../components/FundsSymbol';
import { OrdersSymbol } from '../../components/OrdersSymbol';
import { BasketSymbol } from '../../components/BasketSymbol';
import { useDispatch } from 'react-redux';
import {
    decreaseFunds,
    increaseFunds,
    clearFunds,
} from '../../store/funds/funds-actions';
import { clearOrders } from '../../store/orders/orders-actions';
import { clearBasket } from '../../store/basket/basket-actions';

export const Profile: React.FC = () => {
    const fundsStep = 1000;
    const dispatch = useDispatch();
    const handleDecreaseFunds = () => {
        dispatch(decreaseFunds(fundsStep));
    };
    const handleIncreaseFunds = () => {
        dispatch(increaseFunds(fundsStep));
    };
    const handleClearFunds = () => {
        dispatch(clearFunds());
    };
    const handleClearOrders = () => {
        dispatch(clearOrders());
    };
    const handleClearBasket = () => {
        dispatch(clearBasket());
    };

    return (
        <div className="Profile">
            <div>Profile</div>
            <div>for debug:</div>
            <div className="Profile__funds">
                <button onClick={handleDecreaseFunds}>- {fundsStep}</button>
                <FundsSymbol />

                <button onClick={handleIncreaseFunds}>+ {fundsStep}</button>
                <button onClick={handleClearFunds}>clear</button>
            </div>

            <div className="Profile__orders">
                <OrdersSymbol />
                <button onClick={handleClearOrders}>clear</button>
            </div>
            <div className="Profile__basket">
                <BasketSymbol className="Profile__BasketSymbol" />
                <button onClick={handleClearBasket}>clear</button>
            </div>
        </div>
    );
};
