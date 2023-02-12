import React from 'react'
import EmployerDashboardTop from '../EmployerDashboard/EmployerDashboardTop'
import EmployerDashboardMenu from "../EmployerDashboard/EmployerDashboardMenu"
import TopNav from '../TopNav/TopNav'
import "./EmployerPricingPlan.css"
import DashboardHeading from '../DashboardHeading/DashboardHeading'
import BuyPackageTable from '../BuyPackageTable/BuyPackageTable'
import Footer from '../Footer/Footer'



const EmployerPricingPlan = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <EmployerDashboardTop />
        <EmployerDashboardMenu />
      </div>
      <div className="employer-pricing-plan-title">
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
      <Footer/>
    </div>
  )
}

export default EmployerPricingPlan
