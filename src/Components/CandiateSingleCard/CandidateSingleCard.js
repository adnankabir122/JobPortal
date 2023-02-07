import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faFilter,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const CandidateSingleCard = (props) => {
  return (
    <Link to="/jobDetails" className="w-100" >
      <div className="job-card-content card-hover">
        <div className="card-img text-center w-100">
          <img src={props.img} alt="" />
        </div>
        <div className="card-heading text-center">
          <h2>{props.title}</h2>
        </div>
        <div className="card-middle-info">
          <div className="card-address">
            <div className="upper-address">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                {props.address}
              </span>
              <span>
                <FontAwesomeIcon icon={faFilter} />
                {props.companyType}
              </span>
            </div>
            <span className="job-type">
              <FontAwesomeIcon icon={faBriefcase} />
              {props.jobType}
            </span>
          </div>
        </div>
        <div className="card-info-bottom d-flex align-items-center justify-content-between">
          <span>
            <FontAwesomeIcon icon={faClock} />
            {props.time}, ago
          </span>
          <div className="svg-2">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CandidateSingleCard;
