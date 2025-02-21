import React, { useEffect } from 'react';
import './CatalogItem.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectSelectedGoods } from '../../store/goods/goods-selectors';
import { useDispatch } from 'react-redux';
import { selectGood } from '../../store/goods/goods-actions';
import { GoodDetail } from '../../components/GoodDetail';

export const CatalogItem: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const good = useTypedSelector(selectSelectedGoods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectGood(id ?? null));
    }, [id, dispatch]);

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
