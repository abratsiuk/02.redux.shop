import React from 'react';
import './GoodCard.scss';
import { IGoodCard } from '../../interfaces/IGoodCard';

export const GoodCard: React.FC<IGoodCard> = ({
    id,
    name,
    description,
    price,
    background,
}) => {
    const addToBasket = (item: IGoodCard) => {
        console.log('addToBasket', item);
    };

    return (
        <div className="GoodCard">
            <img
                className="GoodCard__image"
                src={background}
                alt={name}
            />

            <div className="GoodCard__content">
                <span className="GoodCard__title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="GoodCard__action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            description,
                            background,
                            price,
                        })
                    }
                >
                    Add to Cart
                </button>
                <span className="GoodCard__price">{price} &curren;</span>
            </div>
        </div>
    );
};
