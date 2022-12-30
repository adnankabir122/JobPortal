import React from 'react'
import eDashImg from "./company.png";
import "./EmployerDashboardTop.css"
const EmployerDashboardTop = () => {
    return (
      <div className="edashboard-top-area">
        <div className="container">
          <div className="row epad">
            <DashboardInfo />
          </div>
        </div>
      </div>
    );
  };
  export default EmployerDashboardTop
  const DashboardInfo = () => {
    return (
      <div className="col-md-6">
        <div className="dashboard-personal-info d-flex align-items-center">
          <div className="dashboard-img">
            <img src={eDashImg} alt="" />
          </div>
          <div className="dashboard-name">
            <h4>Marketing and Communications</h4>
          </div>
        </div>
      </div>
    );
  };
  