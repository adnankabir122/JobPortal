import React from "react";
const JobSingleCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="job-card-content">
        <div className="card-img">
          <img src={props.img} alt="" />
        </div>
        <div className="card-heading">
          <h2>{props.title}</h2>
          <span>
            {" "}
            via <span>{props.subTitle}</span>
          </span>
        </div>
        <div className="card-middle-info">
          <div className="card-address">
            <h4>{props.address}</h4>
            <h4>{props.companyType}</h4>
            <h4>{props.jobType}</h4>
          </div>
        </div>
        <div className="card-info-bottom">
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default JobSingleCard;
