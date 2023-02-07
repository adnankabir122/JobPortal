import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobSingleCard from "../JobSingleCard/JobSingleCard";
import jobCardsData from "../JobCards/jobCardsData";
const CandidatesCardContainer = () => {
  return (
    <>
      <div className="row">
        <div className="show-page-candidates">
          <h2>
            Showing 1-10 of <span>28 Candidates</span>{" "}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="sort-by-area">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
            Get job alert
          </button>
          <div className="sort-by">
            <span className="sort-by-text">Sort by</span>
            <span>
              <select id="options">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Newest
                </option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {jobCardsData.map((singleData, index) => {
          return (
            <div className="col-lg-6 col-md-6">
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
    </>
  );
};
export default CandidatesCardContainer;
