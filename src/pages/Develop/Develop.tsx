import React from 'react';
import './Develop.scss';
import { DevelopInfo } from '../../components/DevelopInfo';

export const Develop: React.FC = () => {
    return (
        <div className="Develop">
            <DevelopInfo field={'mainType'} />
            <DevelopInfo field={'displayType'} />
            <DevelopInfo field={'rarity'} />
            <DevelopInfo field={'series'} />
            <DevelopInfo field={'banner'} />
            <DevelopInfo field={'priority'} />
        </div>
    );
};
