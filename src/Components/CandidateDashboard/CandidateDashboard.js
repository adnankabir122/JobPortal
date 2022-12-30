import React from "react";
import DashboardMenu from "../DashboardTop/DashboardMenu";
import DashboardTop from "../DashboardTop/DashboardTop";
import TopNav from "../TopNav/TopNav";
import "./CandidateDashboard.css";
import Footer from "../Footer/Footer";
import DashboardStat from "../DashboardStat/DashboardStat";
import RecentAppliedJobs from "../RecentAppliedJobs/RecentAppliedJobs";

const CandidateDashboard = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <DashboardStat />
      <RecentAppliedJobs text="Recent Applied Jobs" />
      <Footer/>
    </div>
  );
};
export default CandidateDashboard;

