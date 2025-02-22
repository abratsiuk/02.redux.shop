import React from 'react';
import './BasketAmount.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketAmount } from '../../store/basket/basket-selectors';

export const BasketAmount: React.FC = () => {
    const amount = useTypedSelector(selectBasketAmount);
    return <>{amount ? <div className="BasketAmount">{amount}</div> : null}</>;
};
