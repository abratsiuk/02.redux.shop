import React from 'react';
import './CatalogSearch.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as SearchImg } from '../../assets/images/search.svg';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';

interface ICatalogSearchProps extends IPropsClassName {}

export const CatalogSearch: React.FC<ICatalogSearchProps> = ({ className }) => {
    const classname = `${className} CatalogSearch`;

    return (
        <div className={classname}>
            <SearchImg className="CatalogSearch__img" />
            <input
                className={'CatalogSearch__field'}
                type="text"
            />
            <ClearImg className="CatalogSearch__clear" />
        </div>
    );
};
