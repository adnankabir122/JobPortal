import React from "react";
import "./JobSingleCard.css";

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
              <span>{props.address}</span>
              <span>{props.companyType}</span>
            </div>
            <span className="job-type">{props.jobType}</span>
          </div>
        </div>
        <div className="card-info-bottom">
            <span>{props.time}, ago</span>
        </div>
      </div>
    </div>
  );
};

export default JobSingleCard;
