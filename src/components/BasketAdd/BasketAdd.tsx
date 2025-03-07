import React, { useState } from 'react';
import './BasketAdd.scss';
import { ReactComponent as BaskedMini } from '../../assets/images/basket_mini_red.svg';
import { ReactComponent as BaskedMiniIn } from '../../assets/images/basket_mini_in.svg';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IBasketAddProps extends IPropsClassName {}

export const BasketAdd: React.FC<IBasketAddProps> = ({ className }) => {
    const classname = `${className} BasketAdd`;
    const [inBasket, setInBasket] = useState(false);

    const toggle = () => {
        setInBasket((state) => !state);
    };
    return (
        <div
            className={classname}
            onClick={toggle}
        >
            {inBasket ? (
                <BaskedMiniIn className="BasketAdd__img" />
            ) : (
                <BaskedMini className="BasketAdd__img" />
            )}
        </div>
    );
};
