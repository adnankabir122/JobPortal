import React from 'react'
import calender from "./assets/calender.png";
import email from "./assets/email.png";
import gender from "./assets/gender.png";
import location from "./assets/location.png";
import name from "./assets/name.png";
import phone from "./assets/phone.png";


const CandidateDetailsLeftTop = () => {
  return (
    <div className="details-left-top">
      <div className="row">
        <SingleLeftTop img={name} title="Name" subTitle="Kamrul Hasan"/>
        <SingleLeftTop img={gender} title="Gender" subTitle="Male" />
        <SingleLeftTop img={calender} title="Job Type" subTitle="Full Time" />
        <SingleLeftTop img={location} title="Address" subTitle="24 SL Road, London. UK" />
        <SingleLeftTop img={email} title="Email" subTitle="xyz@gmail.com" />
        <SingleLeftTop img={phone} title="Phone" subTitle="01245871664"/>
      </div>
    </div>
  )
}

export default CandidateDetailsLeftTop
const SingleLeftTop = (props) => {
    return (
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div className="single-left-top d-flex align-items-center">
          <img src={props.img} alt="" />
          <div className="single-left-top-text">
            <p>{props.title}</p>
            <p className="subtitle">{props.subTitle}</p>
          </div>
        </div>
      </div>
    );
  };
  