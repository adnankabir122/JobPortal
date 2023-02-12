import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faFilter,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./JobCandidateDetailsHeader.css"

const JobCandidateDetailsHeader = (props) => {
  return (
    <div className="details-header-area">
      <div className="container">
        <div className="row">
          <div className="details-header-container">
            <div className="header-img">
              <img src={props.img} alt="" />
            </div>
            <div className="header-details">
              <h2>{props.heading}</h2>

              {/* Only For Job Details Component */}
              {
                (props.msg==="job") ? <span className="via">via <span className="inner-via">Fast Systems Consultants</span></span> : <span></span>
              }

              <div className="details-address">
                <div className="upper-address">
                  <span className="address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Wellesley Rd, London
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faFilter} />
                    IT & Telecoms
                  </span>
                </div>
                <span className="job-type">
                  <FontAwesomeIcon icon={faBriefcase} />
                  Full time
                </span>
              </div>

              {/* Only For Job Details Component  */}
              {
                (props.msg==="job") ? <DetailsBottom/> : <div></div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCandidateDetailsHeader;

const DetailsBottom = () => {
  return (
    <div className="job-details-bottom">
      <div className="job-details-bottom-date d-flex align-items-center">
        <h6>
          {" "}
          <FontAwesomeIcon icon={faCalendar} /> 12 may 2022
        </h6>
      </div>
      <div className="job-details-bottom-heart">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};
