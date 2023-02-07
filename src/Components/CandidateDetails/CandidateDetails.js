import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import DetailsLeftMiddle from "../JobDetails/DetailsLeftMiddle";
import DetailsLeftTop from "../JobDetails/DetailsLeftTop";
import DetailsRight from "../JobDetails/DetailsRight";
import TopNav from "../TopNav/TopNav";
import "./CandidateDetails.css";
import CandidateDetailsLeftTop from "./CandidateDetailsLeftTop";
import CandidateDetailsRight from "./CandidateDetailsRight";
const CandidateDetails = () => {
  return (
    <div>
      <TopNav />
      {/* <JobDetailsMain /> */}
      <CandidateDetailsMain/>
      <ApplyNow />
      <Footer />
    </div>
  );
};

export default CandidateDetails;

const CandidateDetailsMain = () => {
  return (
    <div className="candidate-details-main-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="details-left-area">
              <CandidateDetailsLeftTop />
              {/* <DetailsLeftMiddle /> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="details-right-area">
              <CandidateDetailsRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
