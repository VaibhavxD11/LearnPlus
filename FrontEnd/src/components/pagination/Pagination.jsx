import React from "react";
import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <section className="pagination justify-content-around">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={handlePrevious}
              className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
              <button onClick={() => setCurrentPage(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              onClick={handleNext}
              className={`page-link ${currentPage === totalPages ? "disabled" : ""}`}
              aria-label="Next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
