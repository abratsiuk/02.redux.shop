import React from 'react';
import './OrdersItemShort.scss';
import { IOrder } from '../../interfaces/IOrder';
import { dateToShortString, getOrderIcons } from '../../utils/helpers';
import { OrderStateLabels } from '../../store/orders/orders-reducer';
import { OrderState } from '../OrderState';
import { OrderChevron } from '../OrderChevron';

export interface IOrdersItemShortProps {
    item: IOrder;
}

export const OrdersItemShort: React.FC<IOrdersItemShortProps> = ({ item }) => {
    const name = `No. ${item.id} from ${dateToShortString(item.dateCreate)}`;
    const icons = getOrderIcons(item);
    return (
        <div className="OrdersItemShort">
            <div className="OrderItemShort__name">{name}</div>

            <OrderState
                className="OrderItemShort__state"
                state={item.state}
            />

            <div className="OrdersItemShort__icons">
                {icons.length
                    ? icons.map((i) => (
                          <img
                              className="OrdersItemShort__icon"
                              src={i.icon}
                              alt=""
                              title={i.title}
                          />
                      ))
                    : null}
            </div>

            <OrderShevron className="OrdersItemShort__shevron" />
        </div>
    );
};
