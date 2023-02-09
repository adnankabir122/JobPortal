import React from "react"
import BuyPackageTable from "../BuyPackageTable/BuyPackageTable"
import DashboardHeading from "../DashboardHeading/DashboardHeading"
import DashboardMenu from "../DashboardTop/DashboardMenu"
import DashboardTop from "../DashboardTop/DashboardTop"
import Footer from "../Footer/Footer"
import TopNav from "../TopNav/TopNav"
import "./CandidatePricingPlan.css"

const CandidatePricingPlan = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <div className="candidate-pricing-plan-title">
        <div className="container">
          <DashboardHeading text="Buy Our Plans and Packages" />
        </div>
      </div>
      <div className="candidate-pricing-plan-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BuyPackageTable/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandidatePricingPlan;
