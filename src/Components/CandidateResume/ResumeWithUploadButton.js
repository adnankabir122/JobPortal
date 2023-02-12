import React from 'react'
import DashboardHeading from "../DashboardHeading/DashboardHeading";
const ResumeWithUploadButton = () => {
  return (
    <div className="my-resume-with-button-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <DashboardHeading text="My Resume" />
        </div>
        <div className="col-lg-6">
          <div className="upload-resume-button-area d-flex justify-content-end">
            <button type='file' className="upload-resume-button">Upload Resume</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResumeWithUploadButton
