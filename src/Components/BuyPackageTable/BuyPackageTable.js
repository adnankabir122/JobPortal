import React from "react";
import "./BuyPackageTable.css";

const BuyPackageTable = () => {
  return (
    <div className="packages-area">
      <PackageCard jobs="30" salary="10000" />
      <PackageCard jobs="30" salary="10000" />
      <PackageCard jobs="30" salary="10000" />
    </div>
  );
};
export default BuyPackageTable;

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
