import React from "react";
import { Link } from "react-router-dom";

import {Breadcrumb} from '../components';

const SignUp = () => {
  return (
    <>
    <Breadcrumb current='SignUp' />
    <section className="signup">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="box">
              <h2 className="text-center fs-4 mb-5 fw-bold">Create Your Account</h2>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="theme-btn w-100 my-4">
                  Sign Up
                </button>
                <p className="text-center">
                Already have an account?<Link to="/login"> Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SignUp;
