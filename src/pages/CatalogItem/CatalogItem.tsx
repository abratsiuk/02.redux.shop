import React, { useEffect } from 'react';
import './CatalogItem.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { GoodItem } from '../../components/GoodItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectGoodById } from '../../store/goods/goods-selectors';

export const CatalogItem: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const good = useTypedSelector((state) => selectGoodById(state, id ?? ''));

    useEffect(() => {
        console.log('CatalogItem', id);
    }, [id]);

    return (
        <div className="CatalogItem">
            <button onClick={() => navigate(-1)}>Back</button>
            {good ? (
                <GoodItem
                    key={good.id}
                    {...good}
                />
            ) : (
                <div>Not found...</div>
            )}
        </div>
    );
};
