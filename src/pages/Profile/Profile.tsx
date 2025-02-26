import React from 'react';
import './Profile.scss';
import { FundsSymbol } from '../../components/FundsSymbol';
import { OrdersSymbol } from '../../components/OrdersSymbol';
import { useDispatch } from 'react-redux';
import {
    decreaseFunds,
    increaseFunds,
    clearFunds,
} from '../../store/funds/funds-actions';
import { clearOrders } from '../../store/orders/orders-actions';

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
        </div>
    );
};
