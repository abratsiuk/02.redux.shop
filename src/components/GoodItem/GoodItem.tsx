import React from 'react';
import './GoodItem.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { useDispatch } from 'react-redux';
import {
    addToBasket,
    deleteFromBasket,
} from '../../store/basket/basket-actions';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { BasketAdd } from '../BasketAdd';

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
    const handleDelFromCart = () => {
        dispatch(deleteFromBasket(id));
    };

    return (
        <div className="GoodItem">
            <div className="GoodItem__top">
                {banner?.name ? (
                    <div className="GoodItem__banner">{banner?.name}</div>
                ) : null}
                {priority ? (
                    <div className="GoodItem__priority">
                        Priority:{priority}
                    </div>
                ) : null}
                <img
                    className="GoodItem__image"
                    src={background}
                    alt={name}
                    onClick={goCatalogItem}
                />
                {rarity?.name ? (
                    <div className="GoodItem__rarity">
                        Rarity:{rarity?.name}
                    </div>
                ) : null}
            </div>
            <div
                className="GoodItem__content"
                onClick={goCatalogItem}
            >
                <span
                    className="GoodItem__name"
                    style={{ color: colors?.color2 || undefined }}
                >
                    {(name ?? '').length > 20
                        ? name?.substr(0, 17) + '...'
                        : name}
                </span>
                <div className="GoodItem__type">
                    <span className="GoodItem__displayType">{displayType}</span>
                    {displayType?.toLowerCase() === mainType?.toLowerCase()
                        ? ''
                        : ' (' + mainType + ')'}
                </div>
                <div className="GoodItem__description">{description}</div>
                {series?.name ? <div>Series:{series?.name}</div> : null}
            </div>
            <div className="GoodItem__action">
                <div className="GoodItem__price">{price}</div>
                <BasketAdd
                    className="GoodItem__addToCart"
                    id={id}
                    onAddToCart={handleAddToCart}
                    onDelFromCart={handleDelFromCart}
                />
            </div>
        </div>
    );
};
