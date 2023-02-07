import React from 'react'
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import DashSelectField from "../DashSelectField/DashSelectField";
const Education = () => {
    return (
      <div className="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <DashboardHeading text="Education" />
            </div>
            <div className="col-lg-6">
              <div className="area-btn">
                <button className="btn btn-primary">Add Button</button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="education-main dash-custom-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <DashInputField label="Title" />
              </div>
              <div className="col-12">
                <DashInputField label="Institute" />
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
  
export default Education
