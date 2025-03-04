import React from 'react';
import './CatalogFilterGroup.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { CatalogFilterGroupItem } from '../CatalogFilterGroupItem';
import { IFieldInfo } from '../../interfaces/IFieldInfo';
interface ICatalogFilterGroupProps extends IPropsClassName {
    name: string;
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority';
    fields: IFieldInfo;
}

export const CatalogFilterGroup: React.FC<ICatalogFilterGroupProps> = ({
    className,
    name,
    field,
    fields,
}) => {
    const classname = `${className} CatalogFilterGroup`;

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
