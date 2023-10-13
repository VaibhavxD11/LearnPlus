import React from "react";
import { Link } from "react-router-dom";

import { Title } from "..";

import instructorImg from "../../assets/img/bai-img.png";

import "./instructor.css";

const Instructor = () => {
  return (
    <section className="instructor">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="box py-5">
              <div className="row py-5">
                <div className="col-md-6 mb-5 mb-md-0">
                  <div className="circular-img">
                    <img src={instructorImg} alt="instructor img" />
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <Title
                    title="become a instructor"
                    subtitle="join us to publish own course"
                  />
                  <Link to="/contact" className="theme-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
