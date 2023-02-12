import React from "react";

import CandidateProfessionalSkill from "./CandidateProfessionalSkill";
import CommonDetails from "./CommonDetails";
import CommonInformation from "./CommonInformation";
import PersonalInformation from "./PersonalInformation";
import ResumeWithUploadButton from "./ResumeWithUploadButton";

const CandidateResumeMainArea = () => {
  return (
    <div className="candidate-resume-main-area">
      <ResumeWithUploadButton />
      <PersonalInformation />

      <CommonInformation headingText="Education" buttonText="Add Education"/>
      <CommonDetails section="education"/>

      <CommonInformation headingText="Work & Experience" buttonText="Add Experience"/>
      <CommonDetails section="experience"/>

      <CommonInformation headingText="Awards" buttonText="Add Awards"/>
      <CommonDetails section="awards"/>

      <CandidateProfessionalSkill />
    </div>
  );
};

export default CandidateResumeMainArea;
