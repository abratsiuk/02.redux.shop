import React from 'react';
import './Catalog.scss';
import { GoodList } from '../../components/GoodList';

export const Catalog: React.FC = () => {
    return (
        <div className="Catalog">
            <GoodList />
        </div>
    );
};
