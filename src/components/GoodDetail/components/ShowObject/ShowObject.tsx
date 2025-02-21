import React from 'react';
import './ShowObject.scss';

interface IShowObjectProps {
    name: string;
    value: Record<string, any> | undefined;
}

export const ShowObject: React.FC<IShowObjectProps> = ({ name, value }) => {
    return (
        <div className="ShowObject">
            <div>{name}: </div>
            {value ? (
                Object.entries(value).map(([key, val]) => (
                    <div
                        key={key}
                        className="ShowObject__item"
                    >
                        {key}: <strong>{val}</strong>
                    </div>
                ))
            ) : (
                <div>undefined</div>
            )}
        </div>
    );
};
