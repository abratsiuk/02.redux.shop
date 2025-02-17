import React from 'react';
import './GoodItem.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';

export const GoodItem: React.FC<IGoodItem> = ({
    id,
    name,
    description,
    price,
    full_background,
}) => {
    const addToBasket = (item: IGoodItem) => {
        console.log('addToBasket', item);
    };

    return (
        <div className="GoodItem">
            <img
                className="GoodItem__image"
                src={full_background}
                alt={name}
            />

            <div className="GoodItem__content">
                <span className="GoodItem__title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="GoodItem__action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            description,
                            full_background,
                            price,
                        })
                    }
                >
                    Add to Cart
                </button>
                <span className="GoodItem__price">{price} &curren;</span>
            </div>
        </div>
    );
};
