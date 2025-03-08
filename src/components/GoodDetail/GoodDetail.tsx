import React from 'react';
import './GoodDetail.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { useDispatch } from 'react-redux';
import {
    addToBasket,
    deleteFromBasket,
} from '../../store/basket/basket-actions';
import { IBasketItem } from '../../interfaces/IBasketItem';
import { BasketAdd } from '../BasketAdd';
import { ShowColor } from './components/ShowColor';
import { ShowObject } from './components/ShowObject';

export interface IGoodDetailProps extends IGoodItem {
    goCatalogItem?: () => void;
}
export const GoodDetail: React.FC<IGoodDetailProps> = ({
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
        <div className="GoodDetail">
            <div className="GoodDetail__item">
                <div className="GoodDetail__top">
                    {banner?.name ? (
                        <div className="GoodDetail__banner">{banner?.name}</div>
                    ) : null}
                    {priority ? (
                        <div className="GoodDetail__priority">
                            Priority:{priority}
                        </div>
                    ) : null}
                    <img
                        className="GoodDetail__image"
                        src={background}
                        alt={name}
                        onClick={goCatalogItem}
                    />
                    {rarity?.name ? (
                        <div className="GoodDetail__rarity">
                            Rarity:{rarity?.name}
                        </div>
                    ) : null}
                </div>
                <div
                    className="GoodDetail__content"
                    onClick={goCatalogItem}
                >
                    <span
                        className="GoodDetail__name"
                        style={{ color: colors?.color2 || undefined }}
                    >
                        {(name ?? '').length > 20
                            ? name?.substr(0, 17) + '...'
                            : name}
                    </span>
                    <div className="GoodDetail__type">
                        <span className="GoodDetail__displayType">
                            {displayType}
                        </span>
                        {displayType?.toLowerCase() === mainType?.toLowerCase()
                            ? ''
                            : ' (' + mainType + ')'}
                    </div>
                    <div className="GoodDetail__description">{description}</div>
                    {series?.name ? <div>Series:{series?.name}</div> : null}
                </div>
            </div>
            <div className="GoodDetail__granted">
                <ShowColor
                    name="color1"
                    color={colors?.color1}
                />
                <ShowColor
                    name="color2"
                    color={colors?.color2}
                />
                <ShowColor
                    name="color3"
                    color={colors?.color3}
                />
                <ShowColor
                    name="textBackgroundColor"
                    color={colors?.textBackgroundColor}
                />
            </div>
            <div className="GoodDetail__action">
                <div className="GoodDetail__price">{price}</div>
                {/* <button
                    title="Add to Cart"
                    onClick={handleAddToCart}
                    className="GoodDetail__addToCart"
                ></button> */}
                <BasketAdd
                    className="GoodDetail__addToCart"
                    id={id}
                    onAddToCart={handleAddToCart}
                    onDelFromCart={handleDelFromCart}
                />
            </div>
        </div>
    );
};
