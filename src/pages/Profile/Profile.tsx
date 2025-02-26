import React from 'react';
import './Profile.scss';
import { FundsSymbol } from '../../components/FundsSymbol';
import { OrdersSymbol } from '../../components/OrdersSymbol';

export const Profile: React.FC = () => {
    return (
        <div className="Profile">
            <div>Profile</div>
            <div>for debug:</div>
            <div className="Profile__funds">
                <button>- 1000</button>
                <FundsSymbol />

                <button>+ 1000</button>
                <button>clear</button>
            </div>

            <div className="Profile__orders">
                <OrdersSymbol />
                <button>clear</button>
            </div>
        </div>
    );
};
