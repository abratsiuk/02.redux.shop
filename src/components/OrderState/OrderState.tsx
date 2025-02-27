import React from 'react';
import './OrderState.scss';
import {
    OrderStateEnum,
    OrderStateLabels,
} from '../../store/orders/orders-reducer';

export const OrderState: React.FC<OrderStateEnum> = (state: OrderStateEnum) => {
    const classname = `OrderState OrderState--${state
        .toString()
        .toLowerCase()}`;
    return <div className={classname}>{OrderStateLabels[state]}</div>;
};
