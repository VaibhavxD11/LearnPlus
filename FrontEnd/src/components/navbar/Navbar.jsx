import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";

import "./navbar.css";


const Navbar = ({ name, email }) => {
  const {
    toggleSubmenu,
    openSidebar,
    isSidebar,
    closeSidebar,
    isSubmenu,
  } = useGlobalContext();


  const checkLogin = localStorage.getItem('checkLogin');
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');


  const clearCookies = () => {
    // Set the expiration date to a past date
    const pastDate = new Date(0).toUTCString();

    // Get an array of all cookies
    const cookies = document.cookie.split(';');

    // Loop through each cookie and expire it
    cookies.forEach((cookie) => {
      const [name] = cookie.trim().split('=');
      document.cookie = `${name}=; expires=${pastDate}; path=/`;
    });
  };

  const handleLogout = () => {
    // Clear cookies
    clearCookies();

    // Perform any additional cleanup or API calls here, if needed
    // ...

    // Redirect or update state as needed
  };
  

  return (
    <header className="header py-2">
      <div
        className={`header-backdrop ${isSidebar ? "active" : null}`}
        onClick={closeSidebar}
      ></div>
      <nav className="navbar p-0">
        <div className="container d-flex justify-content-between ">
          <div className="navbar-brand">
            <Link to="/" className=" text-uppercase fs-3 fw-bold">
              <span>learn</span>plus
            </Link>
          </div>
          <button
            onClick={openSidebar}
            type="button"
            className="navbar-togglre d-lg-none fs-1"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className={`navbar-nav-container py-3 py-lg-0 ${
              isSidebar ? "active" : null
            } `}
          >
            <button
              className="header-close-btn d-lg-none theme-bg fs-3 rounded-1 mx-3 mx-lg-0 mb-3 mb-lg-0 "
              onClick={closeSidebar}
              type="button"
            >
              <i className="fa fa-times"></i>
            </button>
            <ul className="navbar-nav d-flex flex-lg-row flex-column align-lg-items-center fs-5">
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link  px-3 px-lg-0"
                  to="/"
                  activeClassName="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/colleges"
                  activeClassName="nav-link"
                >
                  Colleges
                </Link>
              </li>
              <li className="nav-item me-5 ">
                {checkLogin == "Logged In" ? (
                  <>
                    <a onClick={toggleSubmenu} className=" px-3 px-lg-0">
                      User
                      <i className={`fas fa-chevron-down fs-6 ms-2 ms-lg-1 ${isSubmenu ? "rotate" : null} `}
                      ></i>
                    </a>
                    <ul className={`sub-menu rounded-2 px-lg-2 ${isSubmenu ? "active" : ""} `}>
                      <li className="nav-item" id="user-details">
                        <div className='row justify-content-center'>
                          {userName}
                        </div>
                      </li>
                      <li className="nav-item" id="user-details">
                        <div className='row justify-content-center'>
                          {userEmail}
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className='row justify-content-center'>
                          <button type="submit" className="theme-btn " id='logout-btn' onClick={handleLogout}>
                            Log Out
                          </button>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                    <>
                      <a onClick={toggleSubmenu} className=" px-3 px-lg-0">
                        User
                        <i className={`fas fa-chevron-down fs-6 ms-2 ms-lg-1 ${isSubmenu ? "rotate" : null} `}
                          ></i>
                      </a>
                    <ul className={`sub-menu rounded-2 px-lg-2 ${isSubmenu ? "active" : ""} `}
                >
                  <li className="nav-item">
                    <Link
                      onClick={closeSidebar}
                      to="/login"
                      className="nav-link px-5 px-lg-0 "
                    >
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={closeSidebar}
                      to="signup"
                      className="nav-link px-5 px-lg-0"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>

                    </>
                )}
              </li>
              <li className="nav-item ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/contact"
                  activeClassName="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



// <a onClick={toggleSubmenu} className=" px-3 px-lg-0">
//   User
//   <i
//     className={`fas fa-chevron-down fs-6 ms-2 ms-lg-1 ${isSubmenu ? "rotate" : null
//       } `}
//   ></i>
// </a>
// {
//   checkLogin == "Logged In" ? (
//     <ul
//       className={`sub-menu rounded-2 px-lg-2 ${isSubmenu ? "active" : ""
//         } `}
//     >
//       <li className="nav-item" id="user-details">
//         <div className='row justify-content-center'>
//           {userName}
//         </div>
//       </li>
//       <li className="nav-item" id="user-details">
//         <div className='row justify-content-center'>
//           {userEmail}
//         </div>
//       </li>
//       <li className="nav-item">
//         <div className='row justify-content-center'>
//           <button type="submit" className="theme-btn " id='logout-btn' onClick={handleLogout}>
//             Log Out
//           </button>
//         </div>
//       </li>
//     </ul>
//   ) : (
//   <ul
//     className={`sub-menu rounded-2 px-lg-2 ${isSubmenu ? "active" : ""
//       } `}
//   >
//     <li className="nav-item">
//       <Link
//         onClick={closeSidebar}
//         to="/login"
//         className="nav-link px-5 px-lg-0 "
//       >
//         Log In
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link
//         onClick={closeSidebar}
//         to="signup"
//         className="nav-link px-5 px-lg-0"
//       >
//         Sign Up
//       </Link>
//     </li>
//   </ul>
// )
// }
