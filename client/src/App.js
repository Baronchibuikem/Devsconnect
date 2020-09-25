import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import PersistentDrawerLeft from "./components/common_pages/Navbar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <PersistentDrawerLeft />
        <div className="">
          <div
            className="min-vh-100 mx-auto"
            style={{ backgroundColor: "#f6f9fa" }}
          >
            <BaseRouter />
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
