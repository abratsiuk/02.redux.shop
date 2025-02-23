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
                        {val.length > 40 ? (
                            <>
                                {key}: <strong>{val}</strong>
                            </>
                        ) : (
                            <>
                                <div>{key}:</div>{' '}
                                <div>
                                    <strong>{val}</strong>
                                </div>
                            </>
                        )}
                    </div>
                ))
            ) : (
                <div>undefined</div>
            )}
        </div>
    );
};
