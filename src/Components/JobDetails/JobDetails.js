import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import "./JobDetails.css";
import DetailsRight from "./DetailsRight";
import DetailsLeftTop from "./DetailsLeftTop";
import DetailsLeftMiddle from "./DetailsLeftMiddle";

// Job Details Start
const JobDetails = () => {
  return (
    <div>
      <TopNav />
      <JobDetailsMain />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default JobDetails;
// Job Details End

const JobDetailsMain = () => {
  return (
    <div className="job-details-main-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="details-left-area">
              <DetailsLeftTop />
              <DetailsLeftMiddle />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="details-right-area">
              <DetailsRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
