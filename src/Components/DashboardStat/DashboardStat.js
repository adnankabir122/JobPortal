import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope,faThumbsUp,faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./DashboardStat.css";
const DashboardStat = () => {
  return (
    <div className="dashboard-stat-area">
      <div className="container">
        <div className="row">
          <SingleStat icon={faEarthEurope} text="Total Application" color="#0B1640"/>
          <SingleStat icon={faThumbsUp} text="Approve Application" color="#209E15"/>
          <SingleStat icon={faThumbsDown} text="Reject Application" color="#B90E0E"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardStat;

const SingleStat = (props) => {
    const myStyle = {
        background: `${props.color}`,
      };
      console.log(myStyle)
  return (
    <div className="col-md-4">
      <div style={myStyle} className="single-stat text-white d-flex align-items-center justify-content-between">
        <div className="stat-left d-flex align-items-center">
          <div className="stat-icon">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="stat-text">
            <h6>{props.text}</h6>
          </div>
        </div>
        <div className="stat-right">
            <div className="stat-count">
                <h6>10</h6>
            </div>
        </div>
      </div>
    </div>
  );
};
