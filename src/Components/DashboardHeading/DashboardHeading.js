import React from "react";
import "./DashboardHeading.css";
const DashboardHeading = (props) => {
  return (
    <div className="dashboard-heading-text">
      <h2>{props.text}</h2>
    </div>
  );
};

export default DashboardHeading;
