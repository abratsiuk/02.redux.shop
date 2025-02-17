import React from 'react';
import './GoodsList.scss';
import { goods } from '../../mock/mock_shop';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodItem } from '../GoodItem';
import { useNavigate } from 'react-router-dom';

export const GoodsList: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="GoodsList">
            {goods.map((item: IGoodItem) => (
                <GoodItem
                    key={item.id}
                    onClick={() => navigate(`/catalog/${item.id}`)}
                    {...item}
                />
            ))}
        </div>
    );
};
