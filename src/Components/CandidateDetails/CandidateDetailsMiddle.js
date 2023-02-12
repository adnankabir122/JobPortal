import React from "react";
import CommonDetails from "../CandidateResume/CommonDetails";

const CandidateDetailsMiddle = () => {
  return (
    <div className="candidate-details-middle-area">
      <div className="candidate-details-description">
        <p>
          One of the main areas that I work on with my clients is shedding these
          non-supportive beliefs and replacing them with beliefs that will help
          them to accomplish their desires. It is truly amazing the damage that
          we, as parents, can inflict on our children. So why do we do it? For
          the most part, we don’t do it intentionally or with malice. In the
          majority of cases, the cause is a well-meaning but unskilled or
          un-thinking parent, who says the wrong thing at the wrong time, and
          the message sticks – as simple as that!
        </p>
      </div>
      <div className="candidate-details-education details-heading">
        <h2>Education</h2>
        <CommonDetails section="education" noicon="noicon" />
      </div>
      <div className="candidate-details-experience details-heading">
        <h2>Work & Experiences</h2>
        <CommonDetails section="experience" noicon="noicon" />
      </div>
      <div className="candidate-details-awards details-heading">
        <h2>Awards</h2>
        <CommonDetails section="awards" noicon="noicon" />
      </div>

      <div className="candidate-details-professional-skill details-heading">
        <h2>Professional Skill</h2>
        <div className="single-skill-with-progress">
          <div className="row">
            <SingleSkillWithProgress title="PHP" percent="85%" />
            <SingleSkillWithProgress title="PHP" percent="85%" />
            <SingleSkillWithProgress title="Java" percent="45%" />
            <SingleSkillWithProgress title="Java" percent="45%" />
            <SingleSkillWithProgress title="Figma" percent="70%" />
            <SingleSkillWithProgress title="Figma" percent="70%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsMiddle;
const SingleSkillWithProgress = (props) => {
  return (
    <div className="col-lg-6">
      <div className="progress-text d-flex justify-content-between">
        <h6>{props.title}</h6>
        <h6>{props.percent}</h6>
      </div>
      <div className="progress-bar"></div>
    </div>
  );
};
