import React from "react";
import "./DashboardMenu.css";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  const menuItems = [
    {
      path: "/cDash",
      name: "Dashboard",
    },
    {
      path: "/cmyProfile",
      name: "My profile",
    },
    {
      path: "/cmyResume",
      name: "My resume",
    },
    {
      path: "/cmanageJobs",
      name: "Manage jobs",
    },
    {
      path: "/csavedJobs",
      name: "Saved jobs",
    },
    {
      path: "/cpricingPlan",
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
                    <NavLink to={item.path} key={item.name}>
                        {item.name}
                    </NavLink>
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
