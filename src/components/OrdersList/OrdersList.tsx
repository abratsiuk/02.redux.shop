import React from 'react';
import './OrdersList.scss';

export interface IOrdersListProps extends IOrdersState {}

export const OrdersList: React.FC<IOrdersListProps> = ({ items }) => {
    const dispatch = useDispatch();

    const positions = Object.values(items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );

    return (
        <div className="OrdersList">
            {positions.map((item, index) => (
                <OrdersItem
                    key={item.good.id}
                    {...item}
                    positionNumber={index + 1}
                />
            ))}
        </div>
    );
};
