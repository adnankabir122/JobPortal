import React from "react";
import "./BuyPackages.css";
const BuyPackages = () => {
  return (
    <div className="buy-package-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="buy-package-text">
              <h2>Buy Our Plans And Packages</h2>
              <p>
                So, make the decision to move forward. Commit your decision to
                paper, just to bring it into focus. Then, go for it!
              </p>
            </div>
          </div>
          <PackageTable />
        </div>
      </div>
    </div>
  );
};
export default BuyPackages;

const PackageTable = () => {
  return (
    <div className="col-lg-8 col-md-12">
      <div className="buy-package-table-area">
        <div className="row">
          <PackageCard noOfJob="30" jobSalary="10000" />
          <PackageCard noOfJob="30" jobSalary="10000" />
          <PackageCard noOfJob="30" jobSalary="10000" />
        </div>
      </div>
    </div>
  );
};

const PackageCard = (props) => {
  return (
    <div className="col-md-12">
      <div className="single-plan">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="no-of-job d-flex align-items-center">
              <div className="job-circle"></div>
              <p>
                {props.noOfJob} <span>job / month</span>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="job-salary">
              <p>
                {props.jobSalary}tk <span>/ month</span>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="subscribe-btn">
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
