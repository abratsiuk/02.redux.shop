import React from 'react';
import './OrdersItem.scss';
import { Link } from 'react-router-dom';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersItemShort } from '../OrdersItemShort';
import { OrdersItemLong } from '../OrdersItemLong';

export interface IOrdersItemProps {
    item: IOrder;
}

export const OrdersItem: React.FC<IOrdersItemProps> = ({ item }) => {
    return (
        <div className="OrdersItem">
            <OrdersItemShort item={item} />
            {/* <OrdersItemShort item={item} /> */}
            {/* <OrdersItemLong item={item} /> */}
        </div>
    );
};
