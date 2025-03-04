import React from 'react';
import './DevelopInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectFilteredGoods,
    selectFilterTypeFieldInfo,
} from '../../store/goods/goods-selectors';
import { DevelopInfoItem } from './DevelopInfoItem';
import { selectFilter } from '../../store/filter/filter-selectors';

interface IDevelopInfoProps {
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority';
}

export const DevelopInfo: React.FC<IDevelopInfoProps> = ({ field }) => {
    const filter = useTypedSelector(selectFilter);
    const filteredGoods = useTypedSelector((state) =>
        selectFilteredGoods(state, filter)
    );
    const info = useTypedSelector((state) =>
        selectFilterTypeFieldInfo(state, filteredGoods, field, filter)
    );
    return info.items.length ? (
        <div className="DevelopInfo">
            <h2>
                info by "{field}" length: {info.items.length}
            </h2>
            {info.items.map((i) => (
                <DevelopInfoItem
                    className={'DevelopInfoItem__item'}
                    key={i.name}
                    {...i}
                />
            ))}
        </div>
    ) : (
        <div>info by "{field}" is empty</div>
    );
};
