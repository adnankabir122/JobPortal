import React from "react";
import "./DashboardTop.css";
import dashImg from "./dash-image.png";

const DashboardTop = () => {
  return (
    <div className="dashboard-top-area">
      <div className="container">
        <div className="row align-items-center">
          <DashboardInfo />
          <SkillInfo />
        </div>
      </div>
    </div>
  );
};
export default DashboardTop;

const DashboardInfo = () => {
  return (
    <div className="col-md-6">
      <div className="dashboard-personal-info d-flex align-items-center">
        <div className="dashboard-img">
          <img src={dashImg} alt="" />
        </div>
        <div className="dashboard-name">
          <h4>Kamrul Hasan Mreedul</h4>
        </div>
      </div>
    </div>
  );
};

const SkillInfo = () => {
  return (
    <div className="col-md-6">
      <div className="skill-info">
        <div className="skill-increased d-flex justify-content-end">
            <span>Skill Increased by Job Title</span>
        </div>
        <div className="skill-progress-bar"></div>
        <div className="skill-other-info d-flex justify-content-between align-items-center">
            <div className="skill-percent">
                <h4>85%</h4>
            </div>
            <div className="complete-skill-button">
                <button>Complete required skill</button>
            </div>
        </div>
      </div>
    </div>
  );
};
