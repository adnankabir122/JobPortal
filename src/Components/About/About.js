import React from "react";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import aboutBg from "./aboutBg.png";
const About = () => {
  return (
    <div>
      <div className="menu-with-bg main-bg">
        <Menu />
      </div>
      <SectionHeader title="About Us" />
      <MillionJobs/>
    </div>
  );
};
export default About;

const MillionJobs = () => {
  return (
    <div className="million-jobs-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="millions-jobs-text">
              <h2>Millions of jobs, finds the one that's right for you</h2>
              <p>
                We also know those epic stories, those modern-day legends
                surrounding the early failures of such supremely successful
                folks as Michael Jordan and Bill Gates. We can look a bit
                further back in time to Albert Einstein or even further back to
                Abraham Lincoln.
              </p>
            </div>
            <div className="millions-jobs-img">
              <img src={aboutBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
