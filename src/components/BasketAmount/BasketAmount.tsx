import React from 'react';
import './BasketAmount.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectBasketAmount } from '../../store/basket/basket-selectors';
import { selectFunds } from '../../store/funds/funds-selectors';

export const BasketAmount: React.FC = () => {
    const amount = useTypedSelector(selectBasketAmount);
    const funds = useTypedSelector(selectFunds);
    const isFundsEnough = funds >= amount;
    return (
        <>
            {amount ? (
                <div
                    className={
                        isFundsEnough
                            ? 'BasketAmount'
                            : 'BasketAmount BasketAmount__notEnought'
                    }
                >
                    {amount}
                </div>
            ) : null}
        </>
    );
};
