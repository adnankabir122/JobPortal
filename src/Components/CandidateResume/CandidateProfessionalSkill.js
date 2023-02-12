import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CandidateProfessionalSkill = () => {
  return (
    <div className="professional-skills-area">
      <div className="professional-skill-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <DashboardHeading text="Professional Skill" />
            </div>
            <div className="col-lg-6">
              <div className="skill-add-button d-flex justify-content-end">
                <button>Add Skill</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="professional-skills-main-area">
        <div className="container ">
          <div className="skills custom-background">
            <SingleSkillRow />
            <SingleSkillRow />
            <SingleSkillRow />
            <SingleSkillRow />
            <SingleSkillRow />
            <SingleSkillRow />
            <div className="row">
              <div className="add-new-skill-button">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="save-btn-area">
        <div className="container">
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfessionalSkill;

const SingleSkillRow = () => {
  return (
    <div className="row align-items-end">
      <div className="col-lg-5">
        <DashInputField label="Title" placeholder="Photoshop" />
      </div>
      <div className="col-lg-5">
        <DashInputField label="Percentage" placeholder="80%" />
      </div>
      <div className="col-lg-2">
        <div className="skill-delete-button d-flex justify-content-end">
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};
