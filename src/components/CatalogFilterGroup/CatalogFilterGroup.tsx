import React from 'react';
import './CatalogFilterGroup.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectFieldInfo } from '../../store/goods/goods-selectors';
import { CatalogFilterGroupItem } from '../CatalogFilterGroupItem';
import { selectFilter } from '../../store/filter/filter-selectors';

interface ICatalogFilterGroupProps extends IPropsClassName {
    name: string;
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority';
}

export const CatalogFilterGroup: React.FC<ICatalogFilterGroupProps> = ({
    className,
    name,
    field,
}) => {
    const classname = `${className} CatalogFilterGroup`;
    const filter = useTypedSelector(selectFilter);
    const fields = useTypedSelector((state) =>
        selectFieldInfo(state, field, filter)
    );

    if (fields.items.length)
        return (
            <div className={classname}>
                <div className="CatalogFilterGroup__title">{name}</div>
                {fields.items.map((i) => (
                    <CatalogFilterGroupItem
                        key={i.name}
                        className="CatalogFilterGroup__label"
                        field={field}
                        {...i}
                    />
                ))}
            </div>
        );
    else return null;
};
