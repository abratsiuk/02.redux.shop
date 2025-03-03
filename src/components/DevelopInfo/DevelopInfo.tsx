import React from 'react';
import './DevelopInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectFieldInfo } from '../../store/goods/goods-selectors';
import { DevelopInfoItem } from './DevelopInfoItem';

interface IDevelopInfoProps {
    field: string;
}

export const DevelopInfo: React.FC<IDevelopInfoProps> = ({ field }) => {
    const info = useTypedSelector((state) => selectFieldInfo(state, field));
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
