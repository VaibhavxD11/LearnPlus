// import React from "react";
import axios from 'axios';
import React, {useState, useEffect } from "react";
import {Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import plus from "../assets/img/plus.png";

import search from "../assets/img/search.png";



import { Breadcrumb, Title, CourseCard, Pagination } from "../components";

import { courses } from "../assets/data/data";
import SingleCourse from './SingleCourse';

const cardsPerPage = 4;

//const token = global.loginToken;

function showToast() {
  toast.success('🦄 Success', {
    position: "top-center",
    autoClose: 1600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const Courses = () => {
  const [colleges, setColleges] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate the starting and ending index of the cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = currentPage * cardsPerPage;
  
  // const totalPages = Math.ceil(colleges.length / cardsPerPage);
  

  // Slice the colleges array to get the cards for the current page
  
  const navigate = useNavigate();
  
  const coursePage = async () => {
    try {
      //console.log(1);
      const url = "http://localhost:8080/Courses";
      const { res } = await axios.get(url, {
        withCredentials:true,
      });
      if (global.isLogin) {
        showToast();
        global.isLogin = false;
      }
   
      //console.log(res.message);
      //navigate("/Courses");
           
      
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  }
  
  const college = async() => {
    try {
      const url = "http://localhost:8080/college";
      const response  = await axios.get(url);
      //console.log(response.data.data);
      setColleges(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    college();
  },);

  
  // const filteredColleges = colleges.filter((college) =>
  //   college.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredColleges = colleges.filter((college) => {
    const query = searchQuery.toLowerCase();

    if (college.name.toLowerCase().includes(query)) {
      return college;
    }

    if (college.courses) {
      for (const courseName in college.courses) {
        const course = college.courses[courseName];
        if (
          courseName.toLowerCase().includes(query) ||
          (Array.isArray(course) && course.some((item) => item.toLowerCase().includes(query)))
        ) {
          return college;
        }
      }
    }

    return null;
  });

   
  const totalFilteredColleges = filteredColleges.length;
  const totalPages = Math.ceil(totalFilteredColleges / cardsPerPage);

  // Calculate the new startIndex and endIndex based on the current page
  const newStartIndex = (currentPage - 1) * cardsPerPage;
  const newEndIndex = currentPage * cardsPerPage;

  // Slice the filtered results based on the new indexes
  const visibleFilteredColleges = filteredColleges.slice(newStartIndex, newEndIndex);




  

  // const handleSearch = () => {
  //   onSearch(searchQuery);
  // };

  const handleClear = () => {
    setSearchQuery('');
    //onSearch(''); // Clear the search results
  };

  
  // const description = colleges[0].description;
  //  console.log(description);

  // console.log(colleges);.desc
  useEffect(() => {
    coursePage();
  },);


  // useEffect(() => {
  //   showToast();
  // }, [1]);
  

  return (
    
    <div className="container">
      <div>
        <ToastContainer/>
      </div>
      {/* {colleges.map((college, index) => (
        <SingleCourse
          name={college.name}
          // description={description}
        />
      ))} */}
      <Breadcrumb current="Colleges" />
      <Title title="Colleges" subtitle="Find the Best for yourself"/>
      <section className="courses my-0 ">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* <nav>
              <div
                className="nav nav-tabs mb-4 border-0 justify-content-center "
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="web-development-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#web-development"
                  type="button"
                  role="tab"
                  aria-controls="web-development"
                  aria-selected="true"
                >
                  Technology
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="health-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#health"
                  type="button"
                  role="tab"
                  aria-controls="health"
                  aria-selected="false"
                >
                  Management
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="music-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#music"
                  type="button"
                  role="tab"
                  aria-controls="music"
                  aria-selected="false"
                >
                  Design
                </button>
              </div>
            </nav> */}
            <div className="container ">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <div className="box" id='search-box'>
                      <div className="form-group">
                        <input
                            id='search-bar'
                            type="text"
                            name="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required
                            placeholder="Search Colleges"
                            className="form-control"
                        />
                    </div>
                  <div>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content " id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="web-development"
                role="tabpanel"
                aria-labelledby="web-development-tab"
              >
                <div className="row justify-content-center g-4 ">
                  {/* {colleges.map((college, index) => (
                    <CourseCard
                      key={index}
                      collegeImg={college.course_img} // Assuming 'course_img' is the image URL for the college
                      name={college.name}
                      rank={college.rank}
                      description={college.description}
                      link={college.link}
                      courses={college.courses} // Assuming 'categories' is an array of category names
                    />
                  ))} */}
                  {visibleFilteredColleges.map((college, index) => (
                    <CourseCard
                      key={startIndex + index} // Customize the key as needed
                      course_img={college.image}
                      name={college.name}
                      rank={college.rank}
                      description={college.description}
                      link={college.link}
                      courses={college.courses}
                    />
                  ))}


                </div>
                  {/* <div className="pagination col-12 justify-content-center">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={endIndex >= colleges.length}
                    >
                      Next
                    </button>
                  </div> */}
              </div>
              <div
                className="tab-pane fade"
                id="health"
                role="tabpanel"
                aria-labelledby="health-tab"
              >
                <div className="row justify-content-center">
                  {courses
                    .filter((item) => item.category === "health")
                    .map((item) => (
                      <CourseCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="music"
                role="tabpanel"
                aria-labelledby="music-tab"
              >
                <div className="row justify-content-center">
                  {courses
                    .filter((item) => item.category === "music")
                    .map((item) => (
                      <CourseCard key={item.id} {...item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
      <div>
        {global.user=="admin@gmail.com" ? (
          <Link to="/admin">
            <button id="fixed-btn">
              <img src={plus} alt="" id="plus-img" />
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};


export default Courses;
