import React from "react";

import "./detailCurriculum.css";

const DetailCurriculum = ({ courses }) => {
  if (!courses) {
    return null;
  }
  return (
    <div
      className="tab-pane fade show active"
      id="course-curriculum"
      role="tabpanel"
      aria-labelledby="course-curriculum-tab"
    >
      <div className="course-curriculum">
        <h4 className="mb-4">Course Curriculum</h4>
        {/* accardion start */}
        <div className="accordion" id="accordion">
          {Object.keys(courses).map((courseTitle, courseIndex) => (
            <div className="accordion-item" key={courseIndex}>
              <h2 className="accordion-header" id={`heading-${courseIndex}`}>
                <button
                  type="button"
                  className={`accordion-button ${courseIndex === 0 ? "show" : "collapsed"}`}
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${courseIndex}`}
                  aria-expanded={courseIndex === 0 ? "true" : "false"}
                  aria-controls={`collapse-${courseIndex}`}
                >
                  <div className="w-100 d-flex flex-column flex-md-row align-md-items-center justify-content-between">
                    <div className="courses-name fs-5 mb-2 mb-md-0">
                      <span>{courseTitle}</span>
                    </div>
                    <div className="courses-info me-2"></div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse-${courseIndex}`}
                className={`accordion-collapse collapse ${courseIndex === 0 ? "show" : ""}`}
                aria-labelledby={`heading-${courseIndex}`}
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    {courses[courseTitle].map((part, partIndex) => (
                      <li key={partIndex} className="my-2">
                        <div className="d-flex justify-content-between">
                          <button type="button">
                            <i className="fas fa-play me-2 theme-clr"></i>
                            {part}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {/* {chapters.map((chapter) => (
            <div className="accordion-item" key={chapter.id}>
              <h2 className="accordion-header" id={`heading-${chapter.id}`}>
                <button
                  type="button"
                  className={
                    chapter.id === 1
                      ? "accordion-button "
                      : "accordion-button collapsed "
                  }
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${chapter.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${chapter.id}`}
                >
                  <div className="w-100 d-flex flex-column flex-md-row align-md-items-center justify-content-between">
                    <div className="chapter-name fs-5 mb-2 mb-md-0">
                      <span>{chapter.title}</span>
                    </div>
                    <div className="chapter-info me-2">
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse-${chapter.id}`}
                className={
                  chapter.id === 1
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse "
                }
                aria-labelledby={`heading-${chapter.id}`}
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    {chapter.parts.map((part, index) => (
                      <li key={index} className="my-2">
                        <div className="d-flex justify-content-between">
                          <button type="button">
                            <i className="fas fa-play me-2 theme-clr"></i>
                            {part.sub_title}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))} */}
        </div>
        {/* accardion end */}
      </div>
    </div>
  );
};

export default DetailCurriculum;
