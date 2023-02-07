import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
const ProfessionalSkill = () => {
  return (
    <div className="professional-skill ">
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

      <div className="container ">
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <DashInputField label="Title"/>
            </div>
            <div className="col-lg-5">
                <DashInputField label="Percentage"/>
            </div>
            <div className="col-lg-2">
                <div className="skill-delete-icon">
                    <button>Delete</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
export default ProfessionalSkill;

const SingleInputfield = () => {
  return (
    <div className="col-lg-5">
      <DashInputField />
    </div>
  );
};
