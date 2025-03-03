import React from 'react';
import './CatalogFilterItem.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectFieldInfo } from '../../store/goods/goods-selectors';

interface ICatalogFilterItemProps extends IPropsClassName {
    name: string;
    field: string;
}

export const CatalogFilterItem: React.FC<ICatalogFilterItemProps> = ({
    className,
    name,
    field,
}) => {
    const classname = `${className} CatalogFilterItem`;
    const fields = useTypedSelector((state) => selectFieldInfo(state, field));

    if (fields.items.length)
        return (
            <div className={classname}>
                <div className="CatalogFilterItem__title">{name}</div>
                {fields.items.map((i) => (
                    <label className="CatalogFilterItem__label">
                        <input
                            className="CatalogFilterItem__checkbox"
                            type="checkbox"
                            value={i.name}
                        />
                        <span>{i.name}</span>
                        <span className="CatalogFilterItem__count">
                            {'(' + i.count + ')'}
                        </span>
                    </label>
                ))}
            </div>
        );
    else return null;
};
