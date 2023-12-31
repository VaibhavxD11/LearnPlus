import React from "react";

const DetailDescription = ({ description }) => {
  return (
    <div
      className="tab-pane fade"
      id="course-description"
      role="tabpanel"
      aria-labelledby="course-description-tab"
    >
      <div className="course-description">
        <h4 className="mb-4">College Info</h4>
        <p >{description}</p>
        {/* <h5>{course_info.question} :</h5> */}
        {/* <ul>
          {course_info.answer.map((item, index) => (
            <li className="mb-2" key={index}>
              {item}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default DetailDescription;
