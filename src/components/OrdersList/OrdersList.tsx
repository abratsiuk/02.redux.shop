import React from 'react';
import './OrdersList.scss';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersItem } from '../OrdersItem';

interface IOrdersListProps {
    items: IOrder[];
}

export const OrdersList: React.FC<IOrdersListProps> = ({ items }) => {
    return (
        <div className="OrdersList">
            {items.map((item, index) => (
                <OrdersItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};
