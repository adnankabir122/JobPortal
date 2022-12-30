import React from "react";
import "./SecondarySingleCard.css"
const SecondarySingleCard = (props) => {
  console.log(props);
  return (
    <div className="col-md-4">
      <div className="secondary-card-content text-center">
        <div className="contact-image">
            <img src={props.img} alt="" />
        </div>
        <div className="secondary-text">
            <h4>{props.title}</h4>
            <p>{props.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondarySingleCard;
