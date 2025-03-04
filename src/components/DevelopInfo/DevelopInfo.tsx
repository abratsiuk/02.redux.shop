import React from 'react';
import './DevelopInfo.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IDevelopInfoProps extends IPropsClassName {}

export const DevelopInfo: React.FC<IDevelopInfoProps> = ({ className }) => {
    const classname = `${className} DevelopInfo`;

    return <div className={classname}>DevelopInfo</div>;
};
