import React from 'react';
import './GoodGranted.css';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { IGrantedItem } from '../../interfaces/IGrantedItem';

interface IGoodGrantedProps extends IPropsClassName, IGrantedItem {}

export const GoodGranted: React.FC<IGoodGrantedProps> = ({
    className,
    id,
    type,
    name,
    icon,
    description,
    partOfSet,
    qty,
}) => {
    const classname = `${className} GoodGranted`;

    return (
        <div className={classname}>
            <img
                className="GoodGranted__image"
                src={icon}
                alt={name}
            />
            <div className="GoodGranted__content">
                <div className="GoodGranted__name">
                    {((name ?? '').length > 50
                        ? name?.substr(0, 47) + '...'
                        : name) + ((qty ?? 0) > 1 ? ` ( x${qty} )` : '')}
                </div>
                <div>
                    <div className="GoodGranted__type">{type}</div>
                    <div className="GoodGranted__partOfSet">{partOfSet}</div>
                </div>
                <div className="GoodGranted__description">{description}</div>
            </div>
        </div>
    );
};
