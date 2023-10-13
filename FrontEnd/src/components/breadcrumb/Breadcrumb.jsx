import React from "react";
import { Link } from "react-router-dom";

import "./breadcrumb.css";

const Breadcrumb = ({ current, courses }) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-2">
            <li className="breadcrumb-item ">
              <Link to="/">Home</Link>
            </li>
            {courses && (
              <li className="breadcrumb-item">
                <Link to="/courses">Courses</Link>
              </li>
            )}
            <li className="breadcrumb-item active" aria-current="page">
              {current}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
