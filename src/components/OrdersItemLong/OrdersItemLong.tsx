import React from 'react';
import './OrdersItemLong.scss';
import { useDispatch } from 'react-redux';
import { acceptOrder, cancelOrder } from '../../store/orders/orders-actions';
import { IOrder } from '../../interfaces/IOrder';
import { dateToShortString, getOrderIcons } from '../../utils/helpers';
import { OrderState } from '../OrderState';
import { OrderChevron } from '../OrderChevron';
import { OrdersItemLongItem } from '../OrdersItemLongItem';
import { OrderStateEnum } from '../../store/orders/orders-reducer';

export interface IOrdersItemLongProps {
    item: IOrder;
    toggle?: () => void;
}

export const OrdersItemLong: React.FC<IOrdersItemLongProps> = ({
    item,
    toggle,
}) => {
    const dispatch = useDispatch();

    const handleAcceptOrder = () => {
        dispatch(acceptOrder(item.id));
    };
    const handleCancelOrder = () => {
        dispatch(cancelOrder(item.id));
    };

    const positions = Object.values(item.items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    return (
        <div className="OrdersItemLong">
            <div className="OrdersItemLong__name">
                <span>
                    No. <strong>{item.id}</strong> from{' '}
                    {dateToShortString(item.dateCreate)}
                </span>
            </div>

            <OrderState
                className="OrderItemShort__state"
                state={item.state}
            />
            {item.state === OrderStateEnum.WAITING ? (
                <div className="OrdersItemLong__command">
                    <button onClick={handleAcceptOrder}>Accept</button>
                    <button onClick={handleCancelOrder}>Cancel</button>
                </div>
            ) : null}
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

            <OrderChevron
                className="OrdersItemLong__chevron"
                toggle={toggle}
                closed={false}
            />
        </div>
    );
};
