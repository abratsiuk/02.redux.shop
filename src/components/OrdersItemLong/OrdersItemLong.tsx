import React from 'react';
import './OrdersItemLong.scss';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';

export interface IOrdersItemLongProps {
    item: IOrder;
}

export const OrdersItemLong: React.FC<IOrdersItemLongProps> = ({ item }) => {
    return (
        <div className="OrdersItemLong">
            <Link to={`/orders/${item.id}`}>
                <div className="OrdersItemLong__id">Order ID: {item.id}</div>
            </Link>
            <div className="OrdersItemLong__date">
                Created: {new Date(item.dateCreate).toLocaleString()}
            </div>
            <div className="OrdersItemLong__total">
                Total: {item.totalAmount} (Qty: {item.totalQty})
            </div>
            <div className="OrdersItemLong__state">State: {item.state}</div>
        </div>
    );
};
