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
      <div className="candidate-details-education">
        <h2>Education</h2>
        <CommonDetails section="education" />
      </div>
      <div className="candidate-details-experience">
        <h2>Work & Experiences</h2>
        <CommonDetails section="experience" />
      </div>
      <div className="candidate-details-education">
        <h2>Awards</h2>
        <CommonDetails section="awards" />
      </div>
    </div>
  );
};

export default CandidateDetailsMiddle;
