import React from "react";
import { Link } from "react-router-dom";

import { Stars } from "..";

import "./courseCard.css";

const CourseCard = ({
  course_img,
  title,
  price,
  creator,
  creator_img,
  star,
}) => {
  return (
    <div className="col-md-6 col-lg-3">
      <article className="course">
        <Link to="/singlecourse">
          <div className="course-header">
            <img src={course_img} alt={title} className="rounded" />
            <span className="theme-bg px-2 py-1 fw-bold rounded">
              $ {price}
            </span>
          </div>
          <h3 className="course-title my-3 fs-5">{title}</h3>
          <div className="course-footer">
            <div className="footer-creator">
              <img src={creator_img} alt={creator} className="me-2" />
              <span>{creator}</span>
            </div>
            <div className="footer-stars mt-2 d-flex">
              <span className="me-1 fw-bold">({star})</span>
              <Stars stars={star} />
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default CourseCard;
