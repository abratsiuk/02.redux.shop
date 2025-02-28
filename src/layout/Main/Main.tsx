import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Main.scss';
import { BasketSymbol } from '../../components/BasketSymbol';

interface IMainProps {
    children?: ReactNode;
}

export const Main: React.FC<IMainProps> = ({ children }) => {
    const location = useLocation();
    const [className, setClassName] = useState<string>('main');

    useEffect(() => {
        if (
            location.pathname.indexOf('/catalog') !== -1 ||
            location.pathname.indexOf('/basket') !== -1 ||
            location.pathname.indexOf('/orders') !== -1
        ) {
            setClassName('Main_scrollable');
        } else {
            setClassName('Main');
        }
    }, [location]);

    return (
        <main className={className}>
            <BasketSymbol />
            {children}
        </main>
    );
};
