// import React from "react";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Breadcrumb } from "../components";



const LogIn = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""

  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/login";
      const { data: res } = await axios.post(url, data); 
      
      console.log(res.data);

      console.log(data.email);
      console.log(res.message);
      navigate("/Courses");

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


  // Function to check if the "jwtoken" cookie exists
  

  return (
    <>
      <Breadcrumb current="LogIn" />
      <section className="login">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div className="box">
                <h2 className="text-center fs-4 mb-5 fw-bold">
                  Log In To Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 ">
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      required
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex justify-content-end my-3">
                    <Link to={"/forgotpassword"}>Forgot Password?</Link>
                  </div>
                  <div className="form-group mb-3 ">
                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      required
                      onChange={handleChange}
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="theme-btn w-100 my-4" onClick={handleSubmit}>
                    Log In
                  </button>
                  <p className="text-center">
                    Don't have an account ?<Link to="/signup"> Sign Up</Link>
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

export default LogIn;
