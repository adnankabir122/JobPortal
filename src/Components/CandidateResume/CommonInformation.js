import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashInputField from "../DashInputField/DashInputField";
import DashSelectField from "../DashSelectField/DashSelectField";

const CommonInformation = (props) => {
  return (
    <div className="common-info-area">
      <div className="container">
        <div className="common-info-header ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <DashboardHeading text={props.headingText} />
            </div>
            <div className="col-lg-6">
              <div className="common-button-area d-flex justify-content-end">
                <button type="file" className="common-button">
                  {props.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>

        <CommonFormArea buttonText="Add"/>
      </div>
    </div>
  );
};

export default CommonInformation;

const CommonFormArea = (props) => {
  const{titlein,buttonText,institute,year,children} = props
  return (
    <div className="common-form-area form-with-bg">
      <div className="row">
        <div className="col-lg-12">
          <DashInputField label="Title" placeholder={titlein}/>
        </div>
        <div className="col-lg-12">
          <DashInputField label="Institute" placeholder={institute}/>
        </div>
        <div className="col-lg-6">
          <DashSelectField label="Start Year" placeholder={year}/>
        </div>
        <div className="col-lg-6">
          <DashSelectField label="End Year" placeholder={year}/>
        </div>
        <div className="col-lg-12">
          <div className="description">
            <label>Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder={children}></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="common-form-button">
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export {CommonFormArea}