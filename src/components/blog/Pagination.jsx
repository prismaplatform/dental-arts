// components/Pagination.jsx
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex items-center mt-40 pagination justify-center">
      <li className="page-item ml-7">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full font-semibold size-50 flex items-center justify-center text-secondary py-6 px-12 text-base border border-lightgary font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-lightgary"
          aria-label="Previous"
        >
          <span aria-hidden="true"><ArrowLeft/></span>
          <span className="sr-only">Previous</span>
        </button>
      </li>
      {pageNumbers.map(number => (
        <li key={number} className="page-item mx-1">
          <button
            onClick={() => paginate(number)}
            className={`rounded-full font-semibold size-50 flex items-center justify-center py-6 px-12 text-base border font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary ${
              currentPage === number 
                ? 'bg-primary text-white border-primary' 
                : 'bg-gray-50 text-secondary border-lightgary'
            }`}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="page-item ml-3">
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="rounded-full font-semibold size-50 flex items-center justify-center text-secondary py-6 px-12 text-base border border-lightgary font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-lightgary"
          aria-label="Next"
        >
          <span aria-hidden="true"><ArrowRight/></span>
          <span className="sr-only">Next</span>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;