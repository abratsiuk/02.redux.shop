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

    const toggleChevron = () => {
        setClosed((state) => !state);
    };

    return (
        <div className="OrdersItem">
            {closed ? (
                <OrdersItemShort
                    item={item}
                    toggle={toggleChevron}
                />
            ) : (
                <OrdersItemLong
                    item={item}
                    toggle={toggleChevron}
                />
            )}
        </div>
    );
};
