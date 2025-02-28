import React from 'react';
import './OrderShevron.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ShevronClosed } from '../../assets/images/chevron_closed.svg';
import { ReactComponent as ShevronOpened } from '../../assets/images/chevron_opened.svg';

interface IOrderShevronProps extends IPropsClassName {
    closed?: boolean;
    toggle?: () => void;
}

export const OrderShevron: React.FC<IOrderShevronProps> = ({
    closed = true,
    toggle,
    className,
}) => {
    const classname = `${className} OrderShevron ${
        closed ? 'OrderShevron-closed' : 'OrderShevron-opened'
    }`;

    const toggleShevron = () => {
        toggle && toggle();
    };

    return (
        <>
            {closed ? (
                <ShevronClosed
                    className={classname}
                    onClick={toggleShevron}
                />
            ) : (
                <ShevronOpened
                    className={classname}
                    onClick={toggleShevron}
                />
            )}
        </>
    );
};
