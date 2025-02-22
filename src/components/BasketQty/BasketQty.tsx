import React from 'react';
import './BasketQty.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketQty } from '../../store/basket/basket-selectors';

export const BasketQty: React.FC = () => {
    const qty = useTypedSelector(selectBasketQty);
    return <>{qty ? <div className="BasketQty">{qty}</div> : null}</>;
};
