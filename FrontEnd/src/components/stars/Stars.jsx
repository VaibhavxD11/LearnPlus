import React from "react";

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    var star = normalizeRating(stars);
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <i className="fas fa-star"></i>
        ) : star >= number ? (
          <i className="fas fa-star-half-alt"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  });

  
  function normalizeRating(input) {
    // Assuming input is in the range of 1-200
    // Scale it down to a 1-5 range
    const minInput = 1;
    const maxInput = 200;
    const minOutput = 5;
    const maxOutput = 1;

    const normalizedRating = ((input - minInput) / (maxInput - minInput)) * (maxOutput - minOutput) + minOutput;
    global.reviews = normalizedRating.toFixed(1);
    // console.log(normalizedRating.toFixed(5));
    return normalizedRating.toFixed(1);
  }
  

  return <div className="stars-component">
    <span className="ms">({global.reviews} Reviews)</span>
    {tempStars}
  </div>;
};

export default Stars;
