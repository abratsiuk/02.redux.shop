import React from 'react';
import './BasketSymbol.scss';
import { ReactComponent as BaskedSymbolImg } from '../../assets/images/basket.svg';
import { BasketQty } from '../BasketQty';
import { BasketAmount } from '../BasketAmount';
import { Link } from 'react-router-dom';

export const BasketSymbol: React.FC = () => {
    return (
        <div className="BasketSymbol">
            <BasketQty />
            <Link to="/basket">
                <BaskedSymbolImg className="BasketSymbol__img" />
            </Link>
            <BasketAmount />
        </div>
    );
};
