import React from 'react';
import './Orders.scss';
import { OrdersList } from '../../components/OrdersList';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { selectOrders } from '../../store/orders/orders-selectors';
import { IOrdersState } from '../../store/orders/orders-reducer';

export interface IOrdersProps extends IOrdersState {}

export const Orders: React.FC<IOrdersProps> = () => {
    const orders = useTypedSelector(selectOrders);

    return (
        <div className="Orders">
            {orders?.length ? (
                // <OrdersList {...orders} />
                <div>There are {orders.length} orders.</div>
            ) : (
                <p>Your orders are empty.</p>
            )}
        </div>
    );
};
