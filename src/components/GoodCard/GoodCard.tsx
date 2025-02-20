import React from 'react';
import './GoodCard.scss';
import { IGoodCard } from '../../interfaces/IGoodCard';
import { ShowColor } from './components/ShowColor';
import { ShowObject } from './components/ShowObject';

export const GoodCard: React.FC<IGoodCard> = ({
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
}) => {
    const addToBasket = () => {
        alert('addToBasket: ' + name);
    };

    return (
        <div className="GoodCard">
            <img
                className="GoodCard__image"
                src={icon}
                alt={name}
                style={{ width: '10rem' }}
            />
            <img
                className="GoodCard__image"
                src={background}
                alt={name}
            />

            <div className="GoodCard__content">
                <span className="GoodCard__title">{name}</span>
                <p>{description}</p>
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

                <p>mainType: {mainType}</p>
                <p>displayType: {displayType}</p>
                <ShowObject
                    name="rarity"
                    value={rarity}
                />
                <ShowObject
                    name="series"
                    value={series}
                />
                <ShowObject
                    name="offerTag"
                    value={offerTag}
                />
                <ShowObject
                    name="banner"
                    value={banner}
                />
                <p>priority: {priority}</p>
            </div>
            <div className="GoodCard__action">
                <button onClick={addToBasket}>Add to Cart</button>
                <span className="GoodCard__price">{price} &curren;</span>
            </div>
        </div>
    );
};
