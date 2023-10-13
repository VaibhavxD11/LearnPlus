import React from "react";
import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = () => {
  return (
    <section className="pagination justify-content-around">
      <nav aria-label="Page navigation ">
        <ul className="pagination">
          <li className="page-item">
            <Link to={""} className="page-link" aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link">
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link to={""} className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link ">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link disabled">
              ...
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link">
              40
            </Link>
          </li>
          <li className="page-item">
            <Link to={""} className="page-link" aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
