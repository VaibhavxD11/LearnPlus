// import React from "react";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Breadcrumb } from "../components";



const LogIn = () => {
  function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  const showLoading = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        },2000);
      }),
      {
        pending: "Logging In",
        // success: "🦄 Success",
        // error:"Error"
      },
      {
        position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
      }
    )
  }

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""

  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();
   

    try {
      const url = "http://localhost:8080/login";
      const { data: res } = await axios.post(url, data);
      const { getcookie } = await axios.get(url, {
        withCredentials: true,
      } ); 
      
      console.log(res.data);
      //console.log(getcookie.message);
      console.log(data.email);
      console.log(res.message);
      //delay(1900);
      navigate("/Courses");

      // toast.success('🦄 Success', {
      //   position: "top-center",
      //   autoClose: 1600,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });

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
      <div>
        <ToastContainer />
      </div>
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
