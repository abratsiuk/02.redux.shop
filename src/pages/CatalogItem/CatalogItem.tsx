import React, { useEffect } from 'react';
import './CatalogItem.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { GoodItem } from '../../components/GoodItem';
import { good } from '../../mock/mock_good';
// import { IGoodCard } from '../../interfaces/IGoodCard';

export const CatalogItem: React.FC = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('CatalogItem', name);
    }, [name]);

    return (
        <div className="CatalogItem">
            <button onClick={() => navigate(-1)}>Back</button>
            <GoodItem
                key={good.id}
                {...good}
            />
        </div>
    );
};
