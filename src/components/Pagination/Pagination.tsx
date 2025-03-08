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
                className="rs-button Pagination__prev"
                onClick={onPrev}
                disabled={pageNumber === 1}
            >
                Previous
            </button>
            <p>
                Page {pageNumber} of {pageCount}
            </p>
            <button
                className="rs-button  Pagination__next"
                onClick={onNext}
                disabled={pageNumber === pageCount}
            >
                Next
            </button>
            <button
                className="rs-button Pagination__size"
                onClick={() => onPageSize(6)}
            >
                6
            </button>
            <button
                className="rs-button Pagination__size"
                onClick={() => onPageSize(12)}
            >
                12
            </button>
            <button
                className="rs-button Pagination__size"
                onClick={() => onPageSize(24)}
            >
                24
            </button>
            <button
                className="rs-button Pagination__size"
                onClick={() => onPageSize(48)}
            >
                48
            </button>
        </div>
    );
};
