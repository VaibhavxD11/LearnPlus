import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Courses, Home, LogIn, SignUp, SingleCourse, ForgotPassword, CourseForm } from "./pages";




const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/colleges/:collegeName" element={<SingleCourse />} />
      <Route path="/colleges/" element={<Courses />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/admin" element={<CourseForm />} />
    </Routes>
  );
};

export default ConfigRoutes;
