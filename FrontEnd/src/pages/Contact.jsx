import React from "react";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const Contact = () => {
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
                    <h5>Addres</h5>
                    <p>New York, USA 12 st</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2 ">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="item-text">
                    <h5>Phone</h5>
                    <p>+1 5687485</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2 ">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="item-text">
                    <h5>Email</h5>
                    <p>info@learnplus.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form box">
                <h2 className="text-center fs-4 fw-bold mb-5">Leave a Message</h2>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      placeholder="Phone"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="theme-btn w-100">
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
