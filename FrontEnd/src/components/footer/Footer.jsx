import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-contact col-12 py-3 ">
            <div className="row justify-content-between ">
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h6>+1 5687485</h6>
                  <p>Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h6>info@learnplus.com</h6>
                  <p>Online support</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-map"></i>
                </div>
                <div className="contact-text">
                  <h6>New York, USA</h6>
                  <p>NY 10012, US</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social col-12 py-3">
            <div className="row justify-content-center box rounded-0">
              <div className="col-8 ">
                <div className="row ">
                  <div className="col-12 col-md-6 text-center">
                    <p>connect with us on social media</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-baseline ">
                    <div className="social-icon me-2">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-github"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links col-12 py-3">
            <div className="row">
              <div className="links-pages  col-sm-6">
                <h3>
                  <Link to="/" className=" text-uppercase fs-3 fw-bold">
                    <span>lrn</span>plus
                  </Link>
                </h3>
                <ul className="navbar-nav ">
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/singlecourse">
                      Single Course
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="links-info  col-sm-6 mt-4 mt-sm-0">
                <h3>learn plus</h3>
                <p>
                  The project aims to address the critical need for a centralized
                  university information system in India. It's chosen to enhance
                  transparency, facilitate informed decision-making,and promote
                  self-improvement among students and faculty by providing
                  comprehensive course and university data.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright col-12 text-center py-3 ">
            <p>
              &copy;{new Date().getFullYear()} by
              <a href="https://github.com/VaibhavxD11"> Vaibhav Dwivedi</a>, All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
