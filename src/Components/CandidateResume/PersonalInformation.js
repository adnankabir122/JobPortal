import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import DashSelectField from "../DashSelectField/DashSelectField";
const PersonalInformation = () => {
  return (
    <div className="personal-info-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Personal Information" />
        </div>
        <div className="personal-info-form-area form-with-bg">
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
            <div className="col-lg-12">
              <div className="description">
                <label>Description</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
