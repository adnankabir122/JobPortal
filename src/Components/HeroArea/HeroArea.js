import React from "react";
import "./HeroArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HeroArea = () => {
  return (
    <div className="hero-content">
      <HeroTextArea />
      <HeroSearchArea />
    </div>
  );
};

export default HeroArea;

// Components
const HeroTextArea = () => {
  return (
    <div className="hero-text-area">
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
      </div>
    </div>
  );
};

const HeroSearchArea = () => {
  return (
    <div className="hero-search-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="search-box search-box1">
              <label>Search</label>
              <input type="text" placeholder="job,company,title" />
              <span>Trending Keywords : CSE, BBA, MBA, EEE</span>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="search-box search-box2">
              <label>Where</label>
              <input type="text" placeholder="city, county or postcode" />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 d-flex align-items-end">
            <div className="search-btn">
              <Link to="/jobs">
                <button className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faSearch} />
                  Find Job
                </button>
              </Link>
              <span>Advance search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
