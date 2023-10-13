import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title row justify-content-center mb-3">
      <div className="col-md-8 text-center">
        <h2 className="theme-clr text-capitalize">{title}</h2>
        <p className="text-capitalize fs-4 fw-bold ">{subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
