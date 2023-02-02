import React from "react";
import department from "./assets/department.png";
import experience from "./assets/experience.png";
import gender from "./assets/gender.png";
import qualification from "./assets/qualification.png";
import jobType from "./assets/job-type.png";
import salary from "./assets/offered-salary.png";

const DetailsLeftTop = () => {
  return (
    <div className="details-left-top">
      <div className="row">
        <SingleLeftTop img={salary} title="Offered Salary" subTitle="£15,000 - £20,000"
        />
        <SingleLeftTop img={gender} title="Gender" subTitle="Female" />
        <SingleLeftTop img={jobType} title="Job Type" subTitle="Full Time" />
        <SingleLeftTop img={department} title="Department" subTitle="Cse" />
        <SingleLeftTop img={experience} title="Experience" subTitle="5+" />
        <SingleLeftTop img={qualification} title="Qualification" subTitle="Masters"
        />
      </div>
    </div>
  );
};
export default DetailsLeftTop;

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
