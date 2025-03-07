import React from 'react';
import './BasketItem.scss';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { useDispatch } from 'react-redux';
import {
    updateInBasket,
    deleteFromBasket,
} from '../../store/basket/basket-actions';
import { Link } from 'react-router-dom';

export interface IBasketItemProps extends IBasketItem {
    positionNumber: number;
}
export const BasketItem: React.FC<IBasketItemProps> = ({
    positionNumber,
    id,
    name,
    description,
    displayType,
    mainType,
    icon,
    price,
    qty,
}) => {
    const dispatch = useDispatch();

    const handleDecreaseQty = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (qty > 0) {
            dispatch(updateInBasket({ id, qty: qty - 1 }));
        }
    };
    const handleChangeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = parseInt(value, 10);
        if (isNaN(numberValue) || numberValue < 0) {
            return;
        }
        dispatch(updateInBasket({ id, qty: numberValue }));
    };
    const handleIncreaseQty = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        dispatch(updateInBasket({ id, qty: qty + 1 }));
    };
    const handleDeleteItem = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        dispatch(deleteFromBasket(id));
    };

    return (
        <div className="BasketItem">
            <div className="cell BasketItem__index">{positionNumber}</div>
            <img
                className="BasketItem__image"
                src={icon}
                alt={name}
            />
            <div className="cell BasketItem__content">
                <div className="cell BasketItem__name">
                    <Link to={`/catalog/${id}`}>{name}</Link>
                </div>
                <div className="cell BasketItem__type">{displayType}</div>
            </div>
            <div className="cell BasketItem__qty">
                <span className="cell BasketItem__price">{price}</span>
                <span className="cell BasketItem__multiply">*</span>
                <button onClick={handleDecreaseQty}>-</button>
                <input
                    type="text"
                    value={qty}
                    onChange={handleChangeQty}
                    className="BasketItem__value"
                />
                <button onClick={handleIncreaseQty}>+</button>
            </div>
            <div className="cell BasketItem__number">{price * qty}</div>
            <div
                onClick={handleDeleteItem}
                className="cell BasketItem__delete"
            ></div>
        </div>
    );
};
