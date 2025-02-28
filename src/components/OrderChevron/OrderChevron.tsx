import React from 'react';
import './OrderChevron.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { ReactComponent as ChevronClosed } from '../../assets/images/chevron_closed.svg';
import { ReactComponent as ChevronOpened } from '../../assets/images/chevron_opened.svg';

interface IOrderChevronProps extends IPropsClassName {
    closed?: boolean;
    toggle?: () => void;
}

export const OrderChevron: React.FC<IOrderChevronProps> = ({
    closed = true,
    toggle,
    className,
}) => {
    const classname = `${className} OrderChevron ${
        closed ? 'OrderChevron-closed' : 'OrderChevron-opened'
    }`;

    const toggleChevron = () => {
        toggle && toggle();
    };

    return (
        <>
            {closed ? (
                <ChevronClosed
                    className={classname}
                    onClick={toggleChevron}
                />
            ) : (
                <ChevronOpened
                    className={classname}
                    onClick={toggleChevron}
                />
            )}
        </>
    );
};
