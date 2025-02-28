import React from 'react';
import './OrdersItemShort.scss';
import { IOrder } from '../../interfaces/IOrder';
import { dateToShortString, getOrderIcons } from '../../utils/helpers';
import { OrderStateLabels } from '../../store/orders/orders-reducer';
import { OrderState } from '../OrderState';
import { OrderShevron } from '../OrderShevron';

export interface IOrdersItemShortProps {
    item: IOrder;
    toggle?: () => void;
}

export const OrdersItemShort: React.FC<IOrdersItemShortProps> = ({
    item,
    toggle,
}) => {
    const icons = getOrderIcons(item);
    return (
        <div className="OrdersItemShort">
            <div className="OrderItemShort__name">
                <span>
                    No. <strong>{item.id}</strong> from{' '}
                    {dateToShortString(item.dateCreate)}
                </span>
            </div>

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

            <OrderShevron
                className="OrdersItemShort__shevron"
                toggle={toggle}
                closed={true}
            />
        </div>
    );
};
