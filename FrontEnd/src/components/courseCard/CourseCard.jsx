import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SingleCourse from '../../pages/SingleCourse';

import { Stars } from "..";
import tech1 from "../../assets/img/courses/tech/iitb.jpg";


import "./courseCard.css";

const CourseCard = ({
  course_img,
  name,
  rank,
  description,
  link,
  courses,
  star,
}) => {
  return (
    <div className="col-md-6 col-lg-3">
      <article className="course">
        <Link to={`/colleges/${name}`}>
          <div className="course-header">
            <img src={ tech1} alt={name} className="rounded" />
          </div>
          <h3 className="course-title my-3 fs-5">{ name}</h3>
          <div className="course-footer">
            
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
