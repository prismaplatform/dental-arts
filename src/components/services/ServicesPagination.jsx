'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ServicesPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  showEllipsis = true 
}) => {
  const getPageNumbers = () => {
    const delta = 2 // Number of pages to show on each side of current page
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const pageNumbers = totalPages > 1 ? getPageNumbers() : []

  if (totalPages <= 1) {
    return null
  }

  return (
    <ul className="flex items-center mt-40 pagination justify-center">
      {/* Previous Button */}
      <li className="page-item ml-7">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full font-semibold size-50 flex items-center justify-center text-secondary py-6 px-12 text-base border border-lightgary font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-lightgary disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
          <span className="sr-only">Previous</span>
        </button>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((number, index) => (
        <li key={index} className="page-item mx-1">
          {number === '...' ? (
            <span className="rounded-full font-semibold size-50 flex items-center justify-center py-6 px-12 text-base text-gary font-sora">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(number)}
              className={`rounded-full font-semibold size-50 flex items-center justify-center py-6 px-12 text-base border font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary ${
                currentPage === number
                  ? 'bg-primary text-white border-primary'
                  : 'bg-gray-200 text-secondary border-lightgary'
              }`}
            >
              {number}
            </button>
          )}
        </li>
      ))}

      {/* Next Button */}
      <li className="page-item ml-3">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full font-semibold size-50 flex items-center justify-center text-secondary py-6 px-12 text-base border border-lightgary font-sora duration-500 hover:bg-primary hover:text-white hover:border-primary disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-lightgary disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={16} />
          <span className="sr-only">Next</span>
        </button>
      </li>
    </ul>
  )
}

export default ServicesPagination