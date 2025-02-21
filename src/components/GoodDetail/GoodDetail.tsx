import React from 'react';
import './GoodDetail.scss';
import { IGoodDetail } from '../../interface/IGoodDetail';
import { ShowColor } from './components/ShowColor';
import { ShowObject } from './components/ShowObject';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basket-actions';
import { IGoodInBasket } from '../../interfaces/IGoodInBasket';

export const GoodDetail: React.FC<IGoodDetail> = (props) => {
    const {
        id,
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
    } = props;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const goodInBasket: IGoodInBasket = {
            id,
            name,
            description,
            displayType,
            mainType,
            icon,
            price,
        };
        dispatch(addToBasket(goodInBasket));
    };

    return (
        <div className="GoodDetail">
            <img
                className="GoodDetail__image"
                src={icon}
                alt={name}
                style={{ width: '10rem' }}
            />
            <img
                className="GoodDetail__image"
                src={background}
                alt={name}
            />

            <div className="GoodDetail__content">
                <span className="GoodDetail__title">{name}</span>
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
            <div className="GoodDetail__action">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <span className="GoodDetail__price">{price} &curren;</span>
            </div>
        </div>
    );
};
