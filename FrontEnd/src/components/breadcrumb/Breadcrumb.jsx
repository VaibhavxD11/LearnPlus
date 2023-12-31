import React from "react";
import { Link } from "react-router-dom";

import "./breadcrumb.css";

const Breadcrumb = ({ current, courses,login }) => {
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
                <Link to="/colleges">Colleges</Link>
              </li>
            )}
            {login && (
              <li className="breadcrumb-item">
                <Link to="/login">Login</Link>
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
