import React from "react";
import BuyPackageTable from "../BuyPackageTable/BuyPackageTable";
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
          <div className="col-lg-8 col-md-12">
            <BuyPackageTable/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyPackages;