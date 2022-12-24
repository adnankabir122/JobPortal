import React from "react";
import "./HeroArea.css";

const HeroArea = () => {
  return (
    <div className="hero-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-text">
              <h1>
                Drop <span>Resume & Get</span> Your Desired Job
              </h1>
              <h3>Find Jobs & Career Opportunities</h3>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="search-box search-box1">
              <label>Search</label>
              <input
                type="text"

                placeholder="job,company,title"
              />
              <span>Trending Keywords : CSE, BBA, MBA, EEE</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-box search-box2">
              <label>Where</label>
              <input
                type="text"
                placeholder="city, county or postcode"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-btn">
              <button>Find Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
