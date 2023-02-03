import React from "react";
import jobCardsData from "../JobCards/jobCardsData";
import JobSingleCard from "../JobSingleCard/JobSingleCard";
import "./RecentAppliedJobs.css";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import { Link } from "react-router-dom";
const RecentAppliedJobs = (props) => {
  return (
    <div className="recent-applied-jobs-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text={props.text} />
        </div>

        <div className="row">
          {jobCardsData.map((singleData, index) => {
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
      </div>
    </div>
  );
};

export default RecentAppliedJobs;
