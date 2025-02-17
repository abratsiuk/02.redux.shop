import React from 'react';
import './Catalog.scss';
import { GoodsList } from '../../components/GoodsList';

export const Catalog: React.FC = () => {
    return (
        <div className="Catalog">
            <GoodsList />
        </div>
    );
};
