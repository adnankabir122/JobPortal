import React from "react";
import "./JobCards.css";
import JobSingleCard from "./JobSingleCard";
import jobCardsData from "./jobCardsData";

const JobCards = () => {
  return (
    <div className="job-card-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="job-card-top d-flex justify-content-end">
              <div>
                <span className="job-no">1996</span>
                <span className="job-found">Jobs Found</span>
              </div>
            </div>
          </div>

          {jobCardsData.map((singleData, index) => {
            return (
              <JobSingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
                address={singleData.address}
                companyType={singleData.companyType}
                jobType={singleData.jobType}
                time={singleData.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCards;
