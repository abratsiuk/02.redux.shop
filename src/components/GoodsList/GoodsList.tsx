import React from 'react';
import './GoodsList.scss';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodItem } from '../GoodItem';
import { useNavigate } from 'react-router-dom';

interface IGoodListProps {
    goods: IGoodItem[];
    pageSize: number;
    pageNumber: number;
}

export const GoodsList: React.FC<IGoodListProps> = ({
    goods = [],
    pageSize,
    pageNumber,
}) => {
    const navigate = useNavigate();

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
        <div className="GoodsList">
            {goods.slice(startIndex, endIndex).length === 0 ? (
                <p>No goods available.</p>
            ) : (
                goods.slice(startIndex, endIndex).map((item: IGoodItem) => (
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
