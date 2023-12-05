import React, { useEffect, useState } from "react";
import "./detailReviews.css";
import { Stars } from "..";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailReviews = ({ coments, rating }) => {

  const currentDate = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  const { collegeName } = useParams();
  console.log(collegeName);
  const userEmail = localStorage.getItem('userEmail');

  const [data, setData] = useState({
    email: userEmail,
    date: formattedDate,
    college:collegeName,
    review: ""
  });

  const [reviewsData, setReviewsData] = useState([]);
  


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data.email);
    console.log(data.date);
    console.log(collegeName);
    console.log(data.review);

    try {
      const url = "http://localhost:8080/review";
      const { data: res } = await axios.post(url, data);
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

  const getReview = async() => {
    try {
      const url = "http://localhost:8080/getreview";
      const { data: res } = await axios.post(url, collegeName);
      setReviewsData(res.data);
      console.log(reviewsData);
      console.log(res.data);
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {

        console.log(error.response.data.message);
      }
    }
  }

  useEffect(() => {
    getReview();
  },);

  const sortedReviews = reviewsData;
  console.log(sortedReviews);



  return (
    <div
      className="tab-pane fade"
      id="course-reviews"
      role="tabpanel"
      aria-labelledby="course-reviews-tab"
    >
      <div className="course-reviews">
        <h4 className="mb-4">Students Feedback</h4>
        <div className="reviews-star row align-items-center">
          <div className="col-md-4">
            <div className="reviews-rating text-center">
              <div className="rating-average">
                <span className="fs-1 fw-bold">({rating.stars_average})</span>
              </div>
              <div className="rating-stars">
                <Stars stars={rating.stars_average} />
              </div>
              <div className="rating-reviews">
                {/* <span>{rating.reviews} Reviews</span> */}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="reviews-bars">
              {rating.stars.map((item, index) => (
                <div
                  className="bars d-flex align-items-center my-2"
                  key={index}
                >
                  <div className="bars-star theme-clr">
                    <span>{item.star} Star</span>
                  </div>
                  <div className="bars-progress w-75 mx-2">
                    <div className="progress ">
                      <div
                        className="progress-bar theme-bg"
                        style={{ width: `${item.percent}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bars-pecent">
                    <span>{item.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reviews-comment" >
          <h4 className="my-3">Reviews</h4>
          <div id="reviews-section">
          {sortedReviews.map((review, index) => (
            <div className="comment  my-4 mb-3" key={index}>
              <div className="row">
                <div className="col-2 col-md-1 pe-0">
                  <div className="comment-img">
                    {/* <img src={comment.img} alt="user img" /> */}
                  </div>
                </div>
                <div className="row col-10 col-md-11">
                  <div className="row comment-text">
                    <div id="text-details">
                      <div>
                        <h6>{review.name}</h6>
                      </div>
                      <div id="review-date-span">
                        <span className="ms-3" id="newspan">{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div>
                      {/* <h5>{review.review}</h5> */}
                      <p>{review.review}</p>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          <form id="myform" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <textarea
                placeholder="Write Your Review"
                name="review"
                required
                value={data.review}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            <button type="submit" className="theme-btn w-20 my-4 justify-content-end" onClick={handleSubmit}>
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailReviews;
