import React from "react";

import "./facts.css";

const facts = [
  { title: "800k", subTitle: "students we've" },
  { title: "500+", subTitle: "courses" },
  { title: "50+", subTitle: "countries" },
  { title: "100+", subTitle: "skilled instructors" },
];

const Facts = () => {
  return (
    <section className="facts">
      <div className="container">
        <div className="box">
          <div className="row">
            {facts.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className={`fact-item-${index}`}>
                  <h2 className="fs-1 fw-bold">{item.title}</h2>
                  <p className="text-uppercase">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
