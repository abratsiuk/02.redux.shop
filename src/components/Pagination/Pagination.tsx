import React from 'react';
import './Pagination.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';

interface IPaginationProps extends IPropsClassName {
    pageCount: number;
    pageNumber: number;
}
const handlePrevClick = () => {
    alert('Prev');
};
const handleNextClick = () => {
    alert('Next');
};
export const Pagination: React.FC<IPaginationProps> = ({
    pageCount,
    pageNumber,
    className,
}) => {
    const classname = `${className} Pagination`;

    return (
        <div className={classname}>
            <button
                onClick={handlePrevClick}
                disabled={pageNumber === 1}
            >
                Previous
            </button>
            <p>
                Page {pageNumber} of {pageCount}
            </p>
            <button
                onClick={handleNextClick}
                disabled={pageNumber === pageCount}
            >
                Next
            </button>
        </div>
    );
};
