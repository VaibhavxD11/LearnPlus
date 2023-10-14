import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {Breadcrumb} from '../components';

const SignUp = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name:"",
    email: "",
    password: ""

  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/signup";
      const { data: res } = await axios.post(url, data);

      console.log(data.email);
      console.log(res.message);
      navigate("/login");

    }
    catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {

        console.log(error.response.data.message);
      }
    }

  }

  return (
    <>
    <Breadcrumb current='SignUp' />
    <section className="signup">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="box">
              <h2 className="text-center fs-4 mb-5 fw-bold">Create Your Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                      className="form-control"
                      required
                      onChange={handleChange}
                      name='name'
                      value={data.name}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                      className="form-control"
                      required
                      name='email'
                      onChange={handleChange}
                      value={data.email}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                      className="form-control"
                      required
                      name='password'
                      onChange={handleChange}
                      value={data.password}
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
