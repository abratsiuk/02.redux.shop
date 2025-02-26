import React from 'react';
import './OrdersSymbol.scss';
import { ReactComponent as OrdersSymbolImg } from '../../assets/images/orders.svg';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectOrdersLength } from '../../store/orders/orders-selectors';

export const OrdersSymbol: React.FC = () => {
    const ordersLength = useTypedSelector(selectOrdersLength);
    return (
        <div className="OrdersSymbol">
            <Link
                to="/orders"
                className="OrdersSymbol__link"
            >
                <div className="OrdersSymbol__container">
                    <OrdersSymbolImg className="OrdersSymbol__img" />
                    <div className="OrdersSymbol__amount">{ordersLength}</div>
                </div>
            </Link>
        </div>
    );
};
