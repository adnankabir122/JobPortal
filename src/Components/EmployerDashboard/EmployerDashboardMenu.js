import React from "react";
import "./EmployerDashboardMenu.css";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  const menuItems = [
    {
      path: "/employerDashboard",
      name: "Dashboard",
    },
    {
      path: "/emyProfile",
      name: "My profile",
    },

    {
      path: "/emanageCandidates",
      name: "Manage Candidates",
    },
    {
      path: "/emanageJobs",
      name: "Manage Jobs",
    },
    {
      path: "/esavedJobs",
      name: "Saved jobs",
    },
    {
      path: "/ePostJobs",
      name: "Post jobs",
    },
    {
      path: "/epricingPlan",
      name: "Pricing plan",
    },
    {
      path: "/JobPortal",
      name: "Log out",
    },
  ];
  return (
    <div className="dashboard-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="dashboard-menu d-flex justify-content-around">
              {menuItems.map((item) => {
                return (
                    <Link to={item.path} key={item.name}>
                        {item.name}
                    </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
