import React from "react";
import Education from "./Education";

import PersonalInfo from "./PersonalInfo";
import ProfessionalSkill from "./ProfessionalSkill";
import WorkExperience from "./WorkExperience";

const CandidateResumeMainArea = () => {
  return (
    <div className="candidate-resume-main-area">
      <PersonalInfo />
      <Education />
      <WorkExperience/>
      <ProfessionalSkill/>
    </div>
  );
};

export default CandidateResumeMainArea;


