import React, { useState, useEffect } from 'react';
import './CatalogFilterGroupItem.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { IFieldInfoItem } from '../../interfaces/IFieldInfoItem';
import { changeChecked } from '../../store/filter/filter-actions';
import { useDispatch } from 'react-redux';

interface ICatalogFilterGroupItemProps extends IPropsClassName, IFieldInfoItem {
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority';
}

export const CatalogFilterGroupItem: React.FC<ICatalogFilterGroupItemProps> = ({
    className,
    field,
    name,
    count,
    checked,
}) => {
    const classname = `${className} CatalogFilterGroupItem`;
    const [check, setCheck] = useState(checked);
    const dispatch = useDispatch();

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
    };

    useEffect(() => {
        dispatch(changeChecked({ field, name, checked: check }));
    }, [field, name, check, dispatch]);

    return (
        <div className={classname}>
            <input
                className="CatalogFilterGroupItem__checkbox"
                type="checkbox"
                checked={check}
                onChange={handleChecked}
            />
            <span>{name}</span>
            <span className="CatalogFilterGroupItem__count">
                {'(' + count + ')'}
            </span>
        </div>
    );
};
