import React from "react";

import { Breadcrumb, Title, CourseCard, Pagination } from "../components";

import { courses } from "../assets/data/data";

const Courses = () => {
  return (
    <div className="container">
      <Breadcrumb current="Courses" />
      <Title title="our courses" subtitle="find the right course for you" />
      <section className="courses my-0 ">
        <div className="row justify-content-center">
          <div className="col-12">
            <nav>
              <div
                className="nav nav-tabs mb-4 border-0 justify-content-center "
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="web-development-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#web-development"
                  type="button"
                  role="tab"
                  aria-controls="web-development"
                  aria-selected="true"
                >
                  web development
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="health-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#health"
                  type="button"
                  role="tab"
                  aria-controls="health"
                  aria-selected="false"
                >
                  health
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="music-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#music"
                  type="button"
                  role="tab"
                  aria-controls="music"
                  aria-selected="false"
                >
                  music
                </button>
              </div>
            </nav>
            <div className="tab-content " id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="web-development"
                role="tabpanel"
                aria-labelledby="web-development-tab"
              >
                <div className="row justify-content-center g-4 ">
                  {courses
                    .filter((item) => item.category === "web")
                    .map((item) => (
                      <CourseCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="health"
                role="tabpanel"
                aria-labelledby="health-tab"
              >
                <div className="row justify-content-center">
                  {courses
                    .filter((item) => item.category === "health")
                    .map((item) => (
                      <CourseCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="music"
                role="tabpanel"
                aria-labelledby="music-tab"
              >
                <div className="row justify-content-center">
                  {courses
                    .filter((item) => item.category === "music")
                    .map((item) => (
                      <CourseCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
