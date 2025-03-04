import React from 'react';
import './Pagination.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IPaginationProps extends IPropsClassName {
    pageCount: number;
    pageNumber: number;
    onPrev: () => void;
    onNext: () => void;
    onPageSize: (size: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
    pageCount,
    pageNumber,
    className,
    onPrev,
    onNext,
    onPageSize,
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
            <button onClick={() => onPageSize(6)}>6</button>
            <button onClick={() => onPageSize(12)}>12</button>
            <button onClick={() => onPageSize(24)}>24</button>
        </div>
    );
};
