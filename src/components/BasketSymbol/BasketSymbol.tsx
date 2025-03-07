import React from 'react';
import './BasketSymbol.scss';
import { ReactComponent as BaskedSymbolImg } from '../../assets/images/basket.svg';
import { BasketQty } from '../BasketQty';
import { BasketAmount } from '../BasketAmount';
import { Link } from 'react-router-dom';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IBasketSymbolProps extends IPropsClassName {}

export const BasketSymbol: React.FC<IBasketSymbolProps> = ({ className }) => {
    const classname = `${className} BasketSymbol`;

    return (
        <div className={classname}>
            <BasketQty />
            <Link to="/basket">
                <BaskedSymbolImg className="BasketSymbol__img" />
            </Link>
            <BasketAmount />
        </div>
    );
};
