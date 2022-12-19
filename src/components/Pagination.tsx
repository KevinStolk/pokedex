import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface IPageProps {
  setCurrentPage(num: number): void;
  currentPage: number;
  pageUrlCount: number;
}

const Pagination = ({
  setCurrentPage,
  currentPage,
  pageUrlCount,
}: IPageProps) => {
  return (
    <div className='flex items-center justify-center py-3'>
      <button
        className='px-3 py-2 rounded-md font-medium text-sm'
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>
      Page {currentPage} of {pageUrlCount}
      <button
        className='px-3 py-2 rounded-md font-medium text-sm'
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageUrlCount}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
