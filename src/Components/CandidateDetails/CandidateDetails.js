import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import JobCandidateDetailsHeader from "../JobCandidateDetailsHeader/JobCandidateDetailsHeader";
import TopNav from "../TopNav/TopNav";
import "./CandidateDetails.css";
import CandidateDetailsLeftTop from "./CandidateDetailsLeftTop";
import CandidateDetailsRight from "./CandidateDetailsRight";
import mreedul from "./assets/mreedul.png"
import CandidateDetailsMiddle from "./CandidateDetailsMiddle";
const CandidateDetails = () => {
  return (
    <div>
      <TopNav />
      <JobCandidateDetailsHeader img={mreedul} heading="Kamrul Hasan Mreedul"/>
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
              <CandidateDetailsMiddle />
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
