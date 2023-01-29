import React from "react";
import jobCardsData from "../JobCards/jobCardsData";
import JobSingleCard from "../JobSingleCard/JobSingleCard";
import "./RecentAppliedJobs.css";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentAppliedJobs;
