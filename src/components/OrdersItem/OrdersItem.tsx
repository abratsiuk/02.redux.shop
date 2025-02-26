import React from 'react';
import './OrdersItem.scss';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';

export interface IOrdersItemProps {
    item: IOrder;
}

export const OrdersItem: React.FC<IOrdersItemProps> = ({ item }) => {
    return (
        <div className="OrdersItem">
            <Link to={`/orders/${item.id}`}>
                <div className="OrdersItem__id">Order ID: {item.id}</div>
                <div className="OrdersItem__date">
                    Created: {new Date(item.dateCreate).toLocaleString()}
                </div>
                <div className="OrdersItem__total">
                    Total: {item.totalAmount} (Qty: {item.totalQty})
                </div>
            </Link>
            <div className="OrdersItem__state">State: {item.state}</div>
        </div>
    );
};
