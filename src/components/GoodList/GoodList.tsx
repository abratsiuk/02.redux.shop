import React from 'react';
import './GoodList.scss';
import { goods } from '../../mock/mock_shop';
import { IGoodItem } from '../../interfaces/IGoodItem';
import { GoodItem } from '../GoodItem';

export const GoodList: React.FC = () => {
    return (
        <div className="GoodList">
            {goods.map((item: IGoodItem) => (
                <GoodItem
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};
