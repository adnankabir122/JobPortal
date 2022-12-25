import React from "react";
import "./ContactCardArea.css";
import cardData from "./contactCardData";
import ContactSingleCard from "./ContactSIngleCard/ContactSingleCard";
const ContactCardArea = () => {
  return (
    <div className="contact-card-area">
      <div className="container">
        <div className="row">
          {cardData.map((singleData, index) => {
            return (
              <ContactSingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactCardArea;
