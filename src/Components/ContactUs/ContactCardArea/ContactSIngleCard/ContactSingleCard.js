import React from "react";
import "./ContactSingleCard.css"
const ContactSingleCard = (props) => {
  console.log(props);
  return (
    <div className="col-md-4">
      <div className="contact-card-content text-center">
        <div className="contact-image">
            <img src={props.img} alt="" />
        </div>
        <div className="contact-text">
            <h4>{props.title}</h4>
            <p>{props.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSingleCard;
