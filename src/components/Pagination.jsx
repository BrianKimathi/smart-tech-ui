import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/productSlice";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const dispatch = useDispatch();

  const renderPaginationBar = () => {
    const pages = [];

    let startPage = Math.max(currentPage - 5, 1);
    let endPage = Math.min(startPage + 9, totalPages);

    if (endPage - startPage < 9) {
      startPage = Math.max(endPage - 9, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
          } rounded focus:outline-none`}
          onClick={() => {
            onPageChange(i);
            dispatch(setCurrentPage(i));
          }}>
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      {currentPage > 6 && <span className="mx-1">...</span>}
      {renderPaginationBar()}
      {currentPage < totalPages - 5 && <span className="mx-1">...</span>}
    </div>
  );
};

export default Pagination;
