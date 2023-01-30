import React from "react";
import "./BrowseJob.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArrowDown from "./arrow-down.png";
import jobCardsData from "../JobCards/jobCardsData";
import JobSingleCard from "../JobSingleCard/JobSingleCard";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Browse Jobs start
const BrowseJob = () => {
  return (
    <div>
      <TopNav />
      <SectionHeader title="Browse Jobs" />
      <JobsArea/>
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default BrowseJob;
// Browse Jobs End

// Others Component Start
const JobsArea = () => {
  return (
    <div className="jobs-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LeftPanel />
          </div>
          <div className="col-md-9">
            <JobsCardContainer />
          </div>
        </div>
      </div>
    </div>
  );
};


const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="left-search-box">
        <input type="text" placeholder="Search keyword" />
        <input type="text" placeholder="Location" />
      </div>
      <div className="left-option-picker">
        <OptionPicker />
        <OptionPicker />
        <OptionPicker />
        <OptionPicker />
        <OptionPicker />
        <OptionPicker />
        <OptionPicker />
      </div>
    </div>
  );
};
const OptionPicker = () => {
  return (
    <div className="option-picker-area">
      <div className="option-header d-flex align-items-center justify-content-between">
        <h4>Date Posted</h4>
        <button>
          <img src={ArrowDown} alt="" />
        </button>
      </div>
      <div className="options">
        <div className="single-option d-flex align-items-center">
          <input type="checkbox" id="html" className="checks" />
          <label for="html">Last hour</label>
        </div>
        <div className="single-option d-flex align-items-center">
          <input type="checkbox" id="html" className="checks" />
          <label for="html">Last hour</label>
        </div>
        <div className="single-option  d-flex align-items-center">
          <input type="checkbox" id="html" className="checks" />
          <label for="html">Last hour</label>
        </div>
        <div className="single-option d-flex align-items-center">
          <input type="checkbox" id="html" className="checks" />
          <label for="html">Last hour</label>
        </div>
      </div>
    </div>
  );
};

const JobsCardContainer = () => {
  return (
    <>
      <div className="row">
        <div className="show-page-jobs">
          <h2>
            Showing 1-10 of <span>28 Jobs</span>{" "}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="sort-by-area d-flex align-items-center justify-content-between">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
            Get job alert
          </button>
          <div className="sort-by">
            <span className="sort-by-text">Sort by</span>
            <span>
              <select id="options">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Newest
                </option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {jobCardsData.map((singleData, index) => {
          return (
            <div className="col-md-6">
              <JobSingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
                address={singleData.address}
                companyType={singleData.companyType}
                jobType={singleData.jobType}
                time={singleData.time}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export {JobsArea, LeftPanel, OptionPicker, JobsCardContainer}
// Others Component End
