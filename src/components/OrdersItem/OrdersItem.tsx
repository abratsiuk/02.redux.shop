import React, { useState } from 'react';
import './OrdersItem.scss';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersItemShort } from '../OrdersItemShort';
import { OrdersItemLong } from '../OrdersItemLong';

export interface IOrdersItemProps {
    item: IOrder;
}

export const OrdersItem: React.FC<IOrdersItemProps> = ({ item }) => {
    const [closed, setClosed] = useState(true);

    const toggleShevron = () => {
        setClosed((state) => !state);
    };

    return (
        <div className="OrdersItem">
            {closed ? (
                <OrdersItemShort
                    item={item}
                    toggle={toggleShevron}
                />
            ) : (
                <OrdersItemLong
                    item={item}
                    toggle={toggleShevron}
                />
            )}
        </div>
    );
};
