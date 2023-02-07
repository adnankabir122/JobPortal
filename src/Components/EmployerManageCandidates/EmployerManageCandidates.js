import React from "react";
import EmployerDashboardTop from "../EmployerDashboard/EmployerDashboardTop";
import EmployerDashboardMenu from "../EmployerDashboard/EmployerDashboardMenu";
import TopNav from "../TopNav/TopNav";
import "./EmployerManageCandidates.css";
import CandidateCardsData from "../CandiateCardsData.js"
import CandidateSingleCard from "../CandiateSingleCard/CandidateSingleCard";
import { Link } from "react-router-dom";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import Footer from "../Footer/Footer";
const EmployerManageCandidates = () => {
  return (
    <div>
      <TopNav />
      <div className="edashboard-with-menu">
        <EmployerDashboardTop />
        <EmployerDashboardMenu />
      </div>
      <ManageCandidates/>
      <Footer/>
    </div>
  );
};

export default EmployerManageCandidates;

const ManageCandidates = () => {
  return (
    <div className="eDash-manage-candidates-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Manage Candidates" />
        </div>

        <div className="row">
          {CandidateCardsData.map((singleData, index) => {
            return (
              <div className="col-lg-4 col-md-6" as={Link} to="/jobDetails">
                <CandidateSingleCard
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
