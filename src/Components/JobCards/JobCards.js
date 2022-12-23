import React from "react";
import "./JobCards.css";
import card_img from "./card_img.png";
const JobCards = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-img">
          <img src={card_img} alt="" />
        </div>
        <div className="card-heading">
          <h2>
            Marketing and Communications
            <span> via Fast Systems Consultants</span>
          </h2>
        </div>
        <div className="card-info">
          <div className="info-top">
            <span>Wellesley Rd, London</span>
            <span>IT & Telecoms</span>
            <span>Full time</span>
          </div>
          <div className="info-bottom d-flex justify-content-between">
            <span>1m,ago</span>
            <span>1m,ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
