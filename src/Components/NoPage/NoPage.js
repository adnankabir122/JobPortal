import React from "react";
import Menu from "../Menu/Menu";

const NoPage = () => {
  const NoPageStyle = {
    height: "100vh",
  };
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="no-page d-flex align-items-center justify-content-center"
              style={NoPageStyle}
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
