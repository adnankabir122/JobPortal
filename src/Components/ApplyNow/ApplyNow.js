import React from 'react'
import "./ApplyNow.css"
const ApplyNow = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="apply-left bg-primary">
                    <div className="content">
                        <div className="content-left">
                            <img src="" alt="" />
                            <h4>Jobseeker</h4>
                            <h2>Looking for job?</h2>
                        </div>
                        <div className="content-right">
                            <h2>Apply Now</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="apply-right bg-dark">
                    <div className="content">
                        <div className="content-left">
                            <img src="" alt="" />
                            <h4>Recruiter</h4>
                            <h2>Are you recruiting?</h2>
                        </div>
                        <div className="content-right">
                            <h2>Apply Now </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyNow
