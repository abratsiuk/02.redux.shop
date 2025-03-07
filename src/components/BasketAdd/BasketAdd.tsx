import React from 'react';
import './BasketAdd.scss';
import BaskedMini from '../../assets/images/basket_mini_red.svg';
import BaskedMiniIn from '../../assets/images/basket_mini_in.svg';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { selectGoodInBasket } from '../../store/basket/basket-selectors';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IBasketAddProps extends IPropsClassName {
    id: string;
    onAddToCart: () => void;
    onDelFromCart: () => void;
}

export const BasketAdd: React.FC<IBasketAddProps> = React.memo(
    ({ className, id, onAddToCart, onDelFromCart }) => {
        const classname = `${className} BasketAdd`;

        const inBasket = useTypedSelector((state) =>
            selectGoodInBasket(state, id)
        );

        const toggle = () => {
            if (!inBasket && onAddToCart) onAddToCart();
            if (inBasket && onDelFromCart) onDelFromCart();
        };

        return (
            <div
                className={classname}
                onClick={toggle}
            >
                {inBasket ? (
                    <img
                        className="BasketAdd__img"
                        src={BaskedMiniIn}
                        alt=""
                    />
                ) : (
                    <img
                        className="BasketAdd__img"
                        src={BaskedMini}
                        alt=""
                    />
                )}
            </div>
        );
    }
);
