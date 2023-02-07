import React from "react";
import DashboardMenu from "../DashboardTop/DashboardMenu";
import DashboardTop from "../DashboardTop/DashboardTop";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";
import "./CandidateResume.css";
import CandidateResumeMainArea from "./CandidateResumeMainArea";
const CandidateResume = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <CandidateResumeMainArea/>
      <Footer />
    </div>
  );
};

export default CandidateResume;
