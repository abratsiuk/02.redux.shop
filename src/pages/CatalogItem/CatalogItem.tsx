import React from 'react';
import './CatalogItem.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectGoodById } from '../../store/goods/goods-selectors';
import { GoodDetail } from '../../components/GoodDetail';

export const CatalogItem: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const good = useTypedSelector((state) => selectGoodById(state, id ?? ''));

    return (
        <div className="CatalogItem">
            <button onClick={() => navigate(-1)}>Back</button>
            {good ? (
                <GoodDetail
                    key={good.id}
                    {...good}
                />
            ) : (
                <div>Not found...</div>
            )}
        </div>
    );
};
