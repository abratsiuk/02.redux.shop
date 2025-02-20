import React from 'react';
import './GoodsList.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodItem } from '../GoodItem';
import { useNavigate } from 'react-router-dom';

interface IGoodListProps {
    goods: IGoodItem[];
}

export const GoodsList: React.FC<IGoodListProps> = ({ goods = [] }) => {
    const navigate = useNavigate();

    return (
        <div className="GoodsList">
            {goods.length === 0 ? (
                <p>No goods available.</p>
            ) : (
                goods.map((item: IGoodItem) => (
                    <GoodItem
                        key={item.id}
                        onClick={() => navigate(`/catalog/${item.id}`)}
                        {...item}
                    />
                ))
            )}
        </div>
    );
};
