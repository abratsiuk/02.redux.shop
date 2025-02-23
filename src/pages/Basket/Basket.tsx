import React from 'react';
import './Basket.scss';
import { BasketList } from '../../components/BasketList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectIsBasketEmpty } from '../../store/basket/basket-selectors';
import { selectBasket } from '../../store/basket/basket-selectors';
import { IBasketState } from '../../store/basket/basket-reducer';

export interface IBasketProps extends IBasketState {}

export const Basket: React.FC<IBasketProps> = () => {
    const isBasketEmpty = useTypedSelector(selectIsBasketEmpty);
    const basket = useTypedSelector(selectBasket);

    return (
        <div className="Basket">
            {isBasketEmpty ? (
                <p>Your cart is empty.</p>
            ) : (
                <BasketList {...basket} />
            )}
        </div>
    );
};
