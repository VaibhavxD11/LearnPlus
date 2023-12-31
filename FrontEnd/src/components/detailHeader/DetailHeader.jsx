import React from "react";

import { Stars } from "..";

import "./detailHeader.css";

const DetailHeader = ({
  name,
  rank,
  established,
  stars_average,
  reviews,
  students,
  creator_name,
  last_Update,
  language,
}) => {
  return (
    <div className="box">
      <h2 className="text-capitalize mb-3">{ name}</h2>
      <div className="header-rating d-flex mb-1 ">
        <Stars stars={rank} />
      </div>
      <p className="mb-1">Established - { established}</p>
      <p className="mb-1">
        NIRF Ranking - <span className="theme-clr">{ rank}</span>
      </p>
      {/* <p className="mb-1">Last Updated - {last_Update}</p>
      <p>Language - {language}</p> */}
    </div>
  );
};

export default DetailHeader;
