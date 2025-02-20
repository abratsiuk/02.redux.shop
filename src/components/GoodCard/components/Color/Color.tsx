import React from 'react';
import './Color.scss';

interface IColorProps {
    name: string;
    color?: string | null;
}
export const Color: React.FC<IColorProps> = ({ name, color }) => {
    return (
        <div className="Color">
            {color ? (
                <>
                    <div
                        className="Color__show"
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
