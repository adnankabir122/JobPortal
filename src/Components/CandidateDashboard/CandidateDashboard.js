import React from "react";
import DashboardMenu from "../DashboardTop/DashboardMenu";
import DashboardTop from "../DashboardTop/DashboardTop";
import TopNav from "../TopNav/TopNav";
import "./CandidateDashboard.css";
import Footer from "../Footer/Footer";
import DashboardStat from "../DashboardStat/DashboardStat";
import jobCardsData from "../JobCards/jobCardsData";
import JobSingleCard from "../JobCards/JobSingleCard";
import DashboardHeading from "../DashboardHeading/DashboardHeading";

const CandidateDashboard = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <DashboardStat />
      <RecentAppliedJobs />
      <Footer/>
    </div>
  );
};

export default CandidateDashboard;

const RecentAppliedJobs = () => {
  return (
    <div className="recent-applied-jobs-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Recent Applied Jobs"/>
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
