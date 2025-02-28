import React from 'react';
import './OrderState.scss';
import {
    OrderStateEnum,
    OrderStateLabels,
} from '../../store/orders/orders-reducer';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IOrderStateProps extends IPropsClassName {
    state: OrderStateEnum;
}
export const OrderState: React.FC<IOrderStateProps> = ({
    state,
    className,
}) => {
    const classname = `${className} OrderState OrderState-${state
        .toString()
        .toLowerCase()}`;
    return <div className={classname}>{OrderStateLabels[state]}</div>;
};
