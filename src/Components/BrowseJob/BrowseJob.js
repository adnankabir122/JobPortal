import React from "react";
import "./BrowseJob.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArrowDown from "./arrow-down.png";
import jobCardsData from "../JobCards/jobCardsData";
import JobSingleCard from "../JobCards/JobSingleCard";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
const BrowseJob = () => {
  return (
    <div>
      <TopNav />
      <SectionHeader title="Browse Jobs" />
      <div className="jobs-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <LeftPanel />
            </div>
            <div className="col-md-8">
              <JobsCardContainer />
            </div>
          </div>
        </div>
      </div>
      <ApplyNow />
      <Footer />
    </div>
  );
};

export default BrowseJob;

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
    <div className="jobs-card-container">
      <div className="row">
        <div className="show-page-jobs">
          <h2>Showing 1-10 of 28 Jobs</h2>
        </div>
      </div>
      <div className="row">
        <div className="sort-by-area">
          <button>Get job alert</button>
          <div className="sort-by">
            <span>sort by</span>
            <span>Newest</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {jobCardsData.map((singleData, index) => {
            return (
              <JobSingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
                address={singleData.address}
                companyType={singleData.companyType}
                jobType={singleData.jobType}
                time={singleData.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
