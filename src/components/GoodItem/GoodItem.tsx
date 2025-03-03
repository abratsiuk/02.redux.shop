import React from 'react';
import './GoodItem.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basket-actions';
import { IBasketItem } from '../../interfaces/IBasketItem';

export interface IGoodItemProps extends IGoodItem {
    goCatalogItem?: () => void;
}
export const GoodItem: React.FC<IGoodItemProps> = ({
    id,
    offerId,
    name,
    description,
    price,
    icon,
    background,
    colors,
    rarity,
    series,
    offerTag,
    banner,
    priority,
    displayType,
    mainType,
    goCatalogItem,
}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const goodInBasket: IBasketItem = {
            id,
            name,
            description,
            displayType,
            mainType,
            icon,
            price,
            qty: 1,
        };
        dispatch(addToBasket(goodInBasket));
    };

    return (
        <div className="GoodItem">
            <img
                className="GoodItem__image"
                src={background}
                alt={name}
                onClick={goCatalogItem}
            />
            <div
                className="GoodItem__content"
                onClick={goCatalogItem}
            >
                <span
                    className="GoodItem__title"
                    style={{ color: colors?.color2 || undefined }}
                >
                    {name}
                </span>
                <p>{description}</p>
                <p>mainType:{mainType}</p>
                <p>displayType:{displayType}</p>
                <p>rarity:{rarity?.name}</p>
                <p>series:{series?.name}</p>
                <p>banner:{banner?.name}</p>
                <p>offerTag:{offerTag?.text}</p>
            </div>
            <div className="GoodItem__action">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <span className="GoodItem__price">{price} &curren;</span>
            </div>
        </div>
    );
};
