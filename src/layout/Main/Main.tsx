import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Main.scss';

interface IMainProps {
    children?: ReactNode;
}

export const Main: React.FC<IMainProps> = ({ children }) => {
    const location = useLocation();
    const [className, setClassName] = useState<string>('main');

    useEffect(() => {
        if (location.pathname.indexOf('/catalog') !== -1) {
            setClassName('Main_scrollable');
        } else {
            setClassName('Main');
        }
    }, [location]);

    return <main className={className}>{children}</main>;
};
