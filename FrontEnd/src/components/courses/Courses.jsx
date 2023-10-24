import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { CourseCard, Title } from "..";

import { courses } from "../../assets/data/data";

const Courses = () => {

  const [colleges, setColleges] = useState([]);
  const college = async () => {
    try {
      const url = "http://localhost:8080/college";
      const response = await axios.get(url);
      setColleges(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    college();
  }, []);

  // First, sort the colleges based on the 'rank' field
  const sortedColleges = colleges.sort((a, b) => a.rank - b.rank);

  // Then, limit the results to the first 4 colleges
  const top4Colleges = sortedColleges.slice(0, 4);


  return (
    <section className="courses">
      <div className="container">
        <Title title="Top Institutes" subtitle="Find the right place for you" />
        <div className="row gx-4 gy-5">
          {top4Colleges.map((college, index) => (
            <CourseCard
              key={index}
              collegeImg={college.course_img} // Assuming 'course_img' is the image URL for the college
              name={college.name}
              rank={college.rank}
              description={college.description}
              link={college.link}
              courses={college.courses} // Assuming 'categories' is an array of category names
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/colleges" className="theme-btn">
              view all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
