import React from "react";
import "./DashboardMenu.css";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  const menuItems = [
    {
      path: "/candidateDashboard",
      name: "Dashboard",
    },
    {
      path: "/myProfile",
      name: "My profile",
    },
    {
      path: "/myResume",
      name: "My resume",
    },
    {
      path: "/manageJobs",
      name: "Manage jobs",
    },
    {
      path: "/savedJobs",
      name: "Saved jobs",
    },
    {
      path: "/pricingPlan",
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
