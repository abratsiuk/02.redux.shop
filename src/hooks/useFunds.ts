import React from 'react';
import { useTypedSelector } from './useTypedSelector';
import { selectFunds } from '../store/funds/funds-selectors';

export const useFunds = () => {
    const funds = useTypedSelector(selectFunds);

    return funds;
};
