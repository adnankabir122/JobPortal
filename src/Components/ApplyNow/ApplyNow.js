import React from "react";
import "./ApplyNow.css";
import arrow from "./r-arrow.png";
import left from "./left.png";
import right from "./right.png";
const ApplyNow = () => {
  return (
    <div className="apply-now-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="apply-left">
              <div className="content d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <div className="content-img">
                    <img src={left} alt="" />
                  </div>
                  <div className="content-text">
                    <h4>Jobseeker</h4>
                    <h2>Looking for Job?</h2>
                  </div>
                </div>
                <div className="content-right">
                  <a href="">Apply Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="apply-right">
              <div className="content d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <div className="content-img">
                    <img src={right} alt="" />
                  </div>

                  <h4>Recruiter</h4>
                  <h2>Are you recruiting?</h2>
                </div>
                <div className="content-right">
                  <a href="">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
