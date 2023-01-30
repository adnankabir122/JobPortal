import React, { useState } from "react";
import "./JobCards.css";
import JobSingleCard from "../JobSingleCard/JobSingleCard";
import jobCardsData from "./jobCardsData";
import {Link} from "react-router-dom";
const JobCards = () => {
  const [noOfElement, setNoOfElement] = useState([6]);
  const slice = jobCardsData.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  return (
    <div className="job-card-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="job-card-top d-flex justify-content-end pb-4">
              <div>
                <span className="job-no">1996</span>
                <span className="job-found">Jobs Found</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Showing All Job Cards  */}
          {slice.map((singleData, index) => {
            return (
              <div className="col-lg-4 col-md-6" as={Link} to="/jobDetails">
                <JobSingleCard
                  key={index}
                  img={singleData.img}
                  title={singleData.title}
                  subTitle={singleData.subTitle}
                  address={singleData.address}
                  companyType={singleData.companyType}
                  jobType={singleData.jobType}
                  time={singleData.time}
                />
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="more-btn text-center">
            <button className="btn" onClick={() => loadMore()}>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
