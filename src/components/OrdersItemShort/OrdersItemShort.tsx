import React from 'react';
import './OrdersItemShort.scss';
import { IOrder } from '../../interfaces/IOrder';
import { dateToShortString, getOrderIcons } from '../../utils/helpers';
import { OrderStateLabels } from '../../store/orders/orders-reducer';

export interface IOrdersItemShortProps {
    item: IOrder;
}

export const OrdersItemShort: React.FC<IOrdersItemShortProps> = ({ item }) => {
    const name = `No. ${item.id} from ${dateToShortString(item.dateCreate)}`;
    const icons = getOrderIcons(item);
    return (
        <div className="OrdersItemShort">
            <div className="OrderItemShort__name">{name}</div>
            <div className="OrderItemShort__state">
                {OrderStateLabels[item.state]}
            </div>

            <div className="OrdersItemShort__icons">
                {icons.length
                    ? icons.map((i) => (
                          <img
                              className="OrdersItemShort__icon"
                              src={i}
                              alt=""
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
