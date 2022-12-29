import React from "react";
import TopNav from "../TopNav/TopNav";
import "./NoPage.css"
const NoPage = () => {

  return (
    <div>
      <TopNav/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="no-page d-flex align-items-center justify-content-center"
            >
              <h1>No Page Found</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
