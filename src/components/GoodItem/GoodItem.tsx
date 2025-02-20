import React from 'react';
import './GoodItem.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';

export const GoodItem: React.FC<IGoodItem> = ({
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
    onClick,
}) => {
    const addToBasket = () => {
        console.log('addToBasket');
    };

    return (
        <div
            className="GoodItem"
            onClick={onClick}
        >
            <img
                className="GoodItem__image"
                src={background}
                alt={name}
            />

            <div className="GoodItem__content">
                <span className="GoodItem__title">{name}</span>
                <p>{description}</p>
                <p>mainType:{mainType}</p>
                {/* <p title={offerId}>offerId</p>
                <p>displayType:{displayType}</p>
                <p>mainType:{mainType}</p>
                <p>rarityId:{rarity?.id}</p>.<p>seriesId:{series?.id}</p>
                <p>offerTagId:{offerTag?.id}</p> */}
            </div>
            <div className="GoodItem__action">
                <button
                    className="btn"
                    onClick={() => addToBasket()}
                >
                    Add to Cart
                </button>
                <span className="GoodItem__price">{price} &curren;</span>
            </div>
        </div>
    );
};
