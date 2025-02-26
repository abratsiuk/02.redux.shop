import React from 'react';
import './Orders.scss';
import { OrdersList } from '../../components/OrdersList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectIsOrdersEmpty } from '../../store/orders/orders-selectors';
import { selectOrders } from '../../store/orders/orders-selectors';
import { IOrdersState } from '../../store/orders/orders-reducer';

export interface IOrdersProps extends IOrdersState {}

export const Orders: React.FC<IOrdersProps> = () => {
    const isOrdersEmpty = useTypedSelector(selectIsOrdersEmpty);
    const orders = useTypedSelector(selectOrders);

    return (
        <div className="Orders">
            {isOrdersEmpty ? (
                <p>Your cart is empty.</p>
            ) : (
                <OrdersList {...orders} />
            )}
        </div>
    );
};
