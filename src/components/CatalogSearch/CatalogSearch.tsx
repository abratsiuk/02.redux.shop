import React, { useState, useEffect } from 'react';
import './CatalogSearch.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as SearchImg } from '../../assets/images/search.svg';
import { ReactComponent as ClearImg } from '../../assets/images/clear.svg';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/filter/filter-actions';

interface ICatalogSearchProps extends IPropsClassName {}

export const CatalogSearch: React.FC<ICatalogSearchProps> = ({ className }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const classname = `${className} CatalogSearch`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        dispatch(setSearch(value));
    }, [value, dispatch]);

    return (
        <div className={classname}>
            <SearchImg className="CatalogSearch__img" />
            <input
                className={'CatalogSearch__field'}
                type="text"
                value={value}
                onChange={handleChange}
            />
            <ClearImg
                className="CatalogSearch__clear"
                onClick={() => setValue('')}
            />
        </div>
    );
};
