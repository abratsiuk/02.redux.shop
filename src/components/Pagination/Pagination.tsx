import React from 'react';
import './Pagination.scss';

interface IPaginationProps {
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
}) => {
    return (
        <div className="Pagination">
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
