import React from 'react';
import './BasketSymbol.scss';
import { ReactComponent as BaskedSymbolImg } from '../../assets/images/basket.svg';

export const BasketSymbol: React.FC = () => {
    return (
        <div className="BasketSymbol">
            <BaskedSymbolImg className="BasketSymbol__img" />
        </div>
    );
};
