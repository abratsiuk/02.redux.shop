import React from 'react';
import './OrdersList.scss';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersItem } from '../OrdersItem';

interface IOrdersListProps {
    orders: IOrder[];
}

export const OrdersList: React.FC<IOrdersListProps> = ({ orders }) => {
    return (
        <div className="OrdersList">
            {orders.map((item, index) => (
                <OrdersItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};
