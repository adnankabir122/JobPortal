import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import DashSelectField from "../DashSelectField/DashSelectField";

const PersonalInfo = () => {
  return (
    <div className="personal-information">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Personal Information" />
        </div>
      </div>
      <div className="personal-info-main dash-custom-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <DashInputField label="Your Name" />
            </div>
            <div className="col-lg-6">
              <DashInputField label="Email" />
            </div>
            <div className="col-lg-6">
              <DashInputField label="Phone" />
            </div>
            <div className="col-lg-6">
              <DashInputField label="Date of Birth" />
            </div>
            <div className="col-lg-6">
              <DashSelectField label="Gender" />
            </div>
            <div className="col-lg-6">
              <DashInputField label="Address" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="dash-text-area">
                <label>Description</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-100"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
