import React from 'react'
import "./AboutCard.css"
import cardData from '../AboutCardData'
import "../../ContactUs/ContactCardArea/ContactCardArea.css"
import ContactSingleCard from '../../ContactUs/ContactCardArea/ContactSIngleCard/ContactSingleCard'
import '../../ContactUs/ContactCardArea/ContactSIngleCard/ContactSingleCard.css'
const AboutCard = () => {
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
  )
}

export default AboutCard
