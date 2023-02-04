import React from "react";
import "./ApplyNow.css";
import left from "./left.png";
import right from "./right.png";
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Apply Now Start 
const ApplyNow = () => {
  return (
    <div className="apply-now-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <ApplyNowCard
              img={left}
              title="Jobseeker"
              subTitle="Looking for Job?"
              color="#226CF1"
              path="/jobs"
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <ApplyNowCard
              img={right}
              title="Recruiter"
              subTitle="Are you recruiting?"
              color="#0B1640"
              path="/candidates"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyNow;
// Apply Now End 

//Others Components Start
const ApplyNowCard = (props) => {
  const myStyle = {
    background: `${props.color}`,
  };
  return (
    <div className="apply-card mb-3" style={myStyle}>
      <div className="content d-flex align-items-center justify-content-between">
        <div className="content-inner d-flex align-items-center">
          <div className="content-img">
            <img src={props.img} alt="" />
          </div>
          <div className="content-text">
            <h4>{props.title}</h4>
            <h2>{props.subTitle}</h2>
          </div>
        </div>
        <div className="content-button">
          <Link to={props.path}>Apply Now <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
        </div>
      </div>
    </div>
  );
};
//Others Component End
