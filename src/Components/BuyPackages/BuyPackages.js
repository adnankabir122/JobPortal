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
          {/* <PackageTable /> */}
          <PackageTable2 />
        </div>
      </div>
    </div>
  );
};
export default BuyPackages;

const PackageTable2 = () => {
  return (
    <div className="col-lg-8 col-md-12">
      <div className="packages-area">
        <PackageCard jobs="30" salary="10000" />
        <PackageCard jobs="30" salary="10000" />
        <PackageCard jobs="30" salary="10000" />
      </div>
    </div>
  );
};

const PackageCard = (props) => {
  return (
    <div className="single-package custom-padding-30">
      <div className="row align-items-center package-custom-padding">
        <div className="col-4">
          <div className="single-plan">
            <div className="job-no d-flex align-items-center">
              <h4>{props.jobs}</h4>
              <span>job / month</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="single-plan">
            <div className="job-salary d-flex align-items-center">
              <h4>{props.salary}</h4>
              <span>job / month</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="subscribe-btn">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
