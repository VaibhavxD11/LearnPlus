import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const Contact = () => {

  const [data, setData] = useState({
    name:"",
    email: "",
    number: "",
    message: ""

  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });

  };
  const [err, setErr] = useState("");

  function validate() {
    if (!data.name || !data.email || !data.number || !data.message) {
      setErr("Enter All Fields");
      return false;
    }
    const domainToCheck = "@jklu.edu.in";
    if (!data.email.endsWith(domainToCheck)) {
      setErr("Enter JKLU Email ID");
      return false;
    }
    if ((data.number.length != 10)) {
      setErr("Enter 10 digit number");
      return false;

    }
    if (data.number < 0) {
      setErr("Enter Positive Number");
      return false;
    }
    setErr("");
    return true;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const url = "http://localhost:8080/contact";
        const { data: res } = await axios.post(url, data);

        setData({
          name: "",
          email: "",
          number: "",
          message: ""
        });

        console.log(res.data);         

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

  }


  return (
    <>
      <Breadcrumb current='Contact' />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-items">
                <h2 className="mb-4 fw-bold">Get In Touch</h2>
                <div className="contact-item d-flex mb-2 ">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="item-text">
                    <h5>Address</h5>
                    <p>JK Lakshmipat University, Jaipur</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2 ">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="item-text">
                    <h5>Phone</h5>
                    <p>+91 9455153521</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2 ">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="item-text">
                    <h5>Email</h5>
                    <p>vaibhavdwivedi@jlku.edu.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form box">
                <h2 className="text-center fs-4 fw-bold mb-5">Leave a Message</h2>
                <form id="myForm" onSubmit={handleSubmit}>
                  <center><h5>{err}</h5></center>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      name="number"
                      value={data.number}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                      required
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="theme-btn w-100" onClick={handleSubmit}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
