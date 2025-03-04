import React from 'react';
import './Pagination.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IPaginationProps extends IPropsClassName {
    pageCount: number;
    pageNumber: number;
    onPrev: () => void;
    onNext: () => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
    pageCount,
    pageNumber,
    className,
    onPrev,
    onNext,
}) => {
    const classname = `${className} Pagination`;

    return (
        <div className={classname}>
            <button
                onClick={onPrev}
                disabled={pageNumber === 1}
            >
                Previous
            </button>
            <p>
                Page {pageNumber} of {pageCount}
            </p>
            <button
                onClick={onNext}
                disabled={pageNumber === pageCount}
            >
                Next
            </button>
        </div>
    );
};
