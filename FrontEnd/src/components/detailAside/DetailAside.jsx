import React from "react";

import "./detailAside.css";

const DetailAside = ({
  link,
  course_img,
  title,
  price_old,
  price_new,
  price_discount,
  features }) => {

  const video_src = link;
  return (
    <aside className="course-aside box p-3">
      <div className="aside-header">
        <div>
          <iframe className="rounded-3" width="320" height="180" src={video_src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <div className="header-info">
          <div className="info-icon mb-2 ms-4">
            <i className="fas fa-play"></i>
            
          </div>
          <div className="info-text fs-6">
            <span>College Preview</span>
          </div>
        </div> */}
      </div>
      <div className="aside-price my-3">
        {/* <span className="price-old me-3 fs-6 text-decoration-line-through">
          {price_old}
        </span> */}
        {/* <span className="price-new me-3 fs-3 fw-bold">{price_new}</span>
        <span className="price-discount theme-clr me-3 fs-6">
          {price_discount} off
        </span> */}
      </div>
      <div className="aside-features my-3">
        <h5 className="mb-2">Campus Tour</h5>
        {/* <ul>
          {features.map((item, index) => (
            <li key={index} className="d-flex mb-2">
              <div className="feature-icon theme-clr">
                <i className={item.icon}></i>
              </div>
              <div className="feature-text ms-2">{item.title}</div>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="aside-btn">
        {/* <button type="button" className="theme-btn w-100  ">
          Enroll Now
        </button> */}
      </div>
    </aside>
  );
};

export default DetailAside;
