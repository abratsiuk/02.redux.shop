import React from 'react';
import './BasketSymbol.scss';
import { ReactComponent as BaskedSymbolImg } from '../../assets/images/basket.svg';
import { BasketQty } from '../BasketQty';
import { BasketAmount } from '../BasketAmount';

export const BasketSymbol: React.FC = () => {
    return (
        <div className="BasketSymbol">
            <BasketQty />
            <BaskedSymbolImg className="BasketSymbol__img" />
            <BasketAmount />
        </div>
    );
};
