import React from "react";
import EmployerDashboardTop from "../EmployerDashboard/EmployerDashboardTop";
import TopNav from "../TopNav/TopNav";
import EmployerDashboardMenu from "../EmployerDashboard/EmployerDashboardMenu"
import Footer from "../Footer/Footer";
import PostJobMain from "../PostJobMain/PostJobMain";
import "./EmployerPostJob.css"
import DashboardHeading from "../DashboardHeading/DashboardHeading";
const EmployerPostJob = () => {
  return (
    <div className="employer-post-jobs-area">
      <TopNav />
      <div className="edashboard-with-menu">
        <EmployerDashboardTop />
        <EmployerDashboardMenu />
      </div>
      <ManageJobTitle/>
      <PostJobMain/>
      <Footer/>
    </div>
  );
};

export default EmployerPostJob;
const ManageJobTitle = () => {
    return (
      <div className="manage-job-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="jobTitle-left">
                <DashboardHeading text="Post a New Job" />
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="jobTitle-right">
                <h1>Manage Jobs</h1>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
};