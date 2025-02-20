import React from 'react';
import './ShowColor.scss';

interface IShowColorProps {
    name: string;
    color?: string | null;
}
export const ShowColor: React.FC<IShowColorProps> = ({ name, color }) => {
    return (
        <div className="ShowColor">
            {color ? (
                <>
                    <div
                        className="ShowColor__show"
                        style={{ backgroundColor: color }}
                    ></div>
                    <div>
                        {name}: {color}
                    </div>
                </>
            ) : (
                <p>{name}: No color provided</p>
            )}
        </div>
    );
};
