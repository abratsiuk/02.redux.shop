import React from 'react';
import './GoodsList.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodItem } from '../GoodItem';
import { useNavigate } from 'react-router-dom';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IGoodListProps extends IPropsClassName {
    goods: IGoodItem[];
}

export const GoodsList: React.FC<IGoodListProps> = ({
    goods = [],
    className,
}) => {
    const navigate = useNavigate();
    const classname = `${className} GoodsList`;

    return (
        <div className={classname}>
            {goods.length === 0 ? (
                <p>No goods available.</p>
            ) : (
                goods.map((item: IGoodItem) => (
                    <GoodItem
                        key={item.id}
                        goCatalogItem={() => navigate(`/catalog/${item.id}`)}
                        {...item}
                    />
                ))
            )}
        </div>
    );
};
