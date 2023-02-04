import React from "react";

import JobsCardContainer from "./JobsCardContainer";
import LeftPanel from "./LeftPanel";

const JobsArea = () => {
  return (
    <div className="jobs-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <LeftPanel />
          </div>
          <div className="col-lg-9 col-md-12">
            <JobsCardContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobsArea;

