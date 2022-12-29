import React from "react";
import "./JobSingleCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faLocationDot,faFilter,faClock} from '@fortawesome/free-solid-svg-icons'
import {faHeart } from '@fortawesome/free-regular-svg-icons'
const JobSingleCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="job-card-content">
        <div className="card-img text-center w-100">
          <img src={props.img} alt="" />
        </div>
        <div className="card-heading text-center">
          <h2>{props.title}</h2>
          <span className="via">
            via <span className="inner-via">{props.subTitle}</span>
          </span>
        </div>
        <div className="card-middle-info">
          <div className="card-address">
            <div className="upper-address">
              <span><FontAwesomeIcon icon={faLocationDot} />{props.address}</span>
              <span><FontAwesomeIcon icon={faFilter} />{props.companyType}</span>
            </div>
            <span className="job-type"><FontAwesomeIcon icon={faBriefcase} />{props.jobType}</span>
          </div>
        </div>
        <div className="card-info-bottom d-flex align-items-center justify-content-between">
            <span><FontAwesomeIcon icon={faClock} />{props.time}, ago</span>
            <div className="svg-2"><FontAwesomeIcon icon={faHeart} /></div>
        </div>
      </div>
    </div>
  );
};

export default JobSingleCard;
