import React from "react";
import tick from "./assets/tick.png";

const DetailsLeftMiddle = () => {
  return (
    <>
      <SingleMiddleContent1 title="Job Description">
        <p className="p-top">
          One of the main areas that I work on with my clients is shedding these
          non-supportive beliefs and replacing them with beliefs that will help
          them to accomplish their desires.
        </p>
        <p className="p-bottom">
          It is truly amazing the damage that we, as parents, can inflict on our
          children. So why do we do it? For the most part, we don’t do it
          intentionally or with malice. In the majority of cases, the cause is a
          well-meaning but unskilled or un-thinking parent, who says the wrong
          thing at the wrong time, and the message sticks – as simple as that!
        </p>
      </SingleMiddleContent1>

      <SingleMiddleContent2 title="Required Knowledge, Skills, and Abilities">
        <ContentWithTick content="Commitment – understanding the price and having the willingness to pay that price" />
        <ContentWithTick content="Belief – believing in yourself and those around you" />
        <ContentWithTick content="Taking action – practice Ready, Fire, Aim…" />
        <ContentWithTick content="You will drift aimlessly until you arrive back at the original dock" />
        <ContentWithTick content="Commitment – understanding the price and having the willingness to pay that price" />
        <ContentWithTick content="You will run aground and become hopelessly stuck in the mud" />
      </SingleMiddleContent2>

      <SingleMiddleContent2 title="Education + Experience">
        <ContentWithTick content="You will sail along until you collide with an immovable object, after which you ." />
        <ContentWithTick content="Clarity – developing the Vision" />
        <ContentWithTick content="Focus – having a plan" />
        <ContentWithTick content="Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself." />
        <ContentWithTick content="Now go push your own limits and succeed!" />
        <ContentWithTick
          content="Do it today. Remind yourself of someone you know who died suddenly and the fact that there is
              no guarantee that tomorrow will come."
        />
        <ContentWithTick
          content="Let success motivate you. Find a picture of what epitomizes success to you and then pull it out
              when you are in need of motivation."
        />
      </SingleMiddleContent2>
      <SingleMiddleContent2 title="Responsibilities:">
        <ContentWithTick content="Assist in producing clean and concise copy under deadline pressure." />
        <ContentWithTick content="editing daily and weekly features ." />
        <ContentWithTick content="Collaborate with editors across the team to monitor news ." />
        <ContentWithTick content="Learn the real estate beat, drawing on in-house training tools and other resources ." />
        <ContentWithTick content="Coach and mentor team members, where needed ." />
      </SingleMiddleContent2>

      <SingleMiddleContent1 title="Challenges & Benefits" myBorder="border-0">
        <p className="p-top">
          S&P Global is an equal opportunity employer committed to making all
          employment decisions without regard to race/ethnicity, gender,
          pregnancy, gender identity or expression, color, creed, religion,
          national origin, age, disability.
        </p>
        <p className="p-bottom">
          S&P Global is an equal opportunity employer committed to making all
          employment decisions without regard to race/ethnicity, gender,
          pregnancy, gender identity or expression, color, creed, religion,
          national origin, age, disability. marital status (including domestic
          partnerships and civil unions), sexual orientation, military veteran
          status, unemployment status, or other legally protected categories,
          subject to applicable law.
        </p>
      </SingleMiddleContent1>
    </>
  );
};
export default DetailsLeftMiddle;



const ContentWithTick = (props) => {
  return (
    <div className="content-with-tick d-flex align-items-start">
      <img src={tick} alt="" />
      <p>{props.content}</p>
    </div>
  );
};
const SingleMiddleContent1 = (props) => {
  return (
    <div
      className={
        props.myBorder
          ? `single-middle-content ${props.myBorder}`
          : "single-middle-content "
      }
    >
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
const SingleMiddleContent2 = (props) => {
  return (
    <div className="single-middle-content2">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};


