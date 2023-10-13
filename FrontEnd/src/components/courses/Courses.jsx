import React from "react";
import { Link } from "react-router-dom";

import { CourseCard, Title } from "..";

import { courses } from "../../assets/data/data";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <Title title="courses" subtitle="Find the right course for you" />
        <div className="row gx-4 gy-5">
          {courses
            .filter((item) => item.category === "web")
            .map((item) => (
              <CourseCard {...item} key={item.id} />
            ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/courses" className="theme-btn">
              view all courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
