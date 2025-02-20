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
    const onCardClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        if (target.closest('.button')) {
            return;
        }

        onClick?.();
    };
    const addToBasket = () => {
        alert('addToBasket: ' + name);
    };

    return (
        <div
            className="GoodItem"
            onClick={onCardClicked}
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
                <button onClick={() => addToBasket()}>Add to Cart</button>
                <span className="GoodItem__price">{price} &curren;</span>
            </div>
        </div>
    );
};
