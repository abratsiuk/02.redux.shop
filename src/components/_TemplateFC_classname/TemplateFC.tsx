import React from 'react';
import './TemplateFC.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface ITemplateFCProps extends IPropsClassName {}

export const TemplateFC: React.FC<ITemplateFCProps> = ({ className }) => {
    const classname = `${className} TemplateFC`;

    return <div className={classname}>TemplateFC</div>;
};
