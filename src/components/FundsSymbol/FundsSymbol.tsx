import React from 'react';
import './FundsSymbol.scss';
import { ReactComponent as FundsSymbolImg } from '../../assets/images/funds.svg';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectFunds } from '../../store/funds/funds-selectors';

export const FundsSymbol: React.FC = () => {
    const amount = useTypedSelector(selectFunds);
    return (
        <div className="FundsSymbol">
            <Link
                to="/profile"
                className="FundsSymbol__link"
            >
                <div className="FundsSymbol__container">
                    <FundsSymbolImg className="FundsSymbol__img" />
                    <div className="FundsSymbol__amount">{amount}</div>
                </div>
            </Link>
        </div>
    );
};
