import React from 'react';
import './OrdersItemLong.scss';
import { IOrder } from '../../interfaces/IOrder';
import { dateToShortString, getOrderIcons } from '../../utils/helpers';
import { OrderState } from '../OrderState';
import { OrderShevron } from '../OrderShevron';
import { OrdersItemLongItem } from '../OrdersItemLongItem';

export interface IOrdersItemLongProps {
    item: IOrder;
    toggle?: () => void;
}

export const OrdersItemLong: React.FC<IOrdersItemLongProps> = ({
    item,
    toggle,
}) => {
    const positions = Object.values(item.items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    return (
        <div className="OrdersItemLong">
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

            <div className="OrdersItemLong__goods">
                {positions.map((item, index) => (
                    <OrdersItemLongItem
                        key={item.good.id}
                        {...item}
                        positionNumber={index + 1}
                    />
                ))}
            </div>

            <div className="OrdersItemLong__total">
                <div>Total:</div>
                <div>{item.totalAmount}</div>
            </div>

            <OrderShevron
                className="OrdersItemLong__shevron"
                toggle={toggle}
                closed={true}
            />
        </div>
    );
};
