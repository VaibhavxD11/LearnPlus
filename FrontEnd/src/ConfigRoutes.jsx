import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Courses, Home, LogIn, SignUp, SingleCourse, ForgotPassword } from "./pages";

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/singlecourse" element={<SingleCourse />} />
      <Route path="/courses/" element={<Courses />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default ConfigRoutes;
