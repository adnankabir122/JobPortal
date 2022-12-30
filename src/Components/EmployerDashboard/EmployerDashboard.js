import React from "react";
import DashboardStat from "../DashboardStat/DashboardStat";
import Footer from "../Footer/Footer";
import RecentAppliedJobs from "../RecentAppliedJobs/RecentAppliedJobs";
import TopNav from "../TopNav/TopNav";
import "./EmployerDashboard.css";
import EmployerDashboardTop from "./EmployerDashboardTop";
import EmployerDashboardMenu from "./EmployerDashboardMenu"
const EmployerDashboard = () => {
  return (
    <div>
      <TopNav />
      <div className="edashboard-with-menu">
        <EmployerDashboardTop/>
        <EmployerDashboardMenu />
      </div>
      <DashboardStat />
      <RecentAppliedJobs text="Job List" />
      <Footer />
    </div>
  );
};
export default EmployerDashboard;


