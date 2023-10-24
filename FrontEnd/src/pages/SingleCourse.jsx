import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Breadcrumb,
  DetailCurriculum,
  DetailAside,
  DetailDescription,
  DetailHeader,
  DetailReviews,
  DetailTabs,
} from "../components";

import { course } from "../assets/data/data";

const {
  info,
  details,
  chapters,
  description,
  coments,
  rating,
} = course;

const SingleCourse = () => {
  const { collegeName } = useParams();
  console.log(collegeName);

  // const [collegename, setCollegeName] = useState("");
  // setCollegeName(collegeName);
  
  const [colleges, setColleges] = useState([]);
  const college = async () => {
    try {
      const url = "http://localhost:8080/collegeData";
      const response = await axios.post(url, collegeName);
      setColleges(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    college();
  }, []);
  
  
  
  console.log(colleges.courses);
  return (
    <>
      <Breadcrumb courses current="College" />
      <section className="single-course mb-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 order-lg-last ">
              <DetailAside link={colleges.link} />
            </div>
            <div className="col-lg-8">
              <div className="course-main">
                <div className="main-header">
                  <DetailHeader
                    name={colleges.name}
                    rank={colleges.rank}
                  />
                </div>
                <div className="main-tabs my-4">
                  <DetailTabs />
                </div>
                <div className="main-tab-content box">
                  <div className="tab-content" id="nav-tabContent">
                    <DetailCurriculum courses={colleges.courses} />
                    <DetailDescription description={colleges.description} />
                    <DetailReviews coments={coments} rating={rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
