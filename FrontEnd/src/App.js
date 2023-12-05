import React from "react";
import { Navbar,Footer, StyleSwitcher } from "./components";
import ConfigRoutes from "./ConfigRoutes";

const App = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <ConfigRoutes />
      <Footer/>
      <StyleSwitcher/>
    </div>
  );
};

export default App;
