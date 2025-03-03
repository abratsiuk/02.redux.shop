import React, { useState, useEffect } from 'react';
import './CatalogFilterGroupItem.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { IFieldInfoItem } from '../../interfaces/IFieldInfoItem';
import { changeChecked } from '../../store/filter/filter-actions';
import { useDispatch } from 'react-redux';

interface ICatalogFilterGroupItemProps extends IPropsClassName, IFieldInfoItem {
    field: string;
}

export const CatalogFilterGroupItem: React.FC<ICatalogFilterGroupItemProps> = ({
    className,
    field,
    name,
    count,
}) => {
    const classname = `${className} CatalogFilterGroupItem`;
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        dispatch(changeChecked({ field, name, checked }));
    }, [field, name, checked, dispatch]);

    return (
        <div className={classname}>
            <input
                className="CatalogFilterGroupItem__checkbox"
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
            />
            <span>{name}</span>
            <span className="CatalogFilterGroupItem__count">
                {'(' + count + ')'}
            </span>
        </div>
    );
};
