import React from "react";
import "./SubHeader.css";
const SubHeader = (props) => {
  const { heading, paragraph } = props.subHeaderData;
  return (
    <div className="sub-header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-header-text text-center">
              <h2>{heading}</h2>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
