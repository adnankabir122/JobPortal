import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import DashSelectField from "../DashSelectField/DashSelectField";
const Awards = () => {
  return (
    <div className="awards">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <DashboardHeading text="Awards" />
          </div>
          <div className="col-lg-6">
            <div className="area-btn">
              <button className="btn btn-primary">Add Awards</button>
            </div>
          </div>
        </div>
      </div>

      <div className="work-experience dash-custom-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <DashInputField label="Title" />
            </div>
            <div className="col-12">
              <DashInputField label="Company Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <DashSelectField label="Start Year" />
            </div>
            <div className="col-lg-6">
              <DashSelectField label="End Year" />
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
          <div className="row">
            <div className="inside-btn">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
