import React from "react";
import ArrowDown from "./arrow-down.png";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <LeftSearchBox />
      <LeftOptionPicker />
    </div>
  );
};
export default LeftPanel;

const OptionHeader = (props) => {
  return (
    <div className="option-header d-flex align-items-center justify-content-between">
      <h4>{props.title}</h4>
      <button>
        <img src={ArrowDown} alt="" />
      </button>
    </div>
  );
};

const LeftOptionPicker = () => {
  return (
    <div className="left-option-picker-area">
        <div className="single-option-picker">
            <OptionHeader title="Date Posted"/>
            <Option label="Last hour" />
            <Option label="Last 24 hour"/>
            <Option label="Last 7 days" />
            <Option label="Last 14 days"/>
            <Option label="Last 30 days"/>
        </div>
        <div className="single-option-picker">
            <OptionHeader title="Specialism"/>
            <Option label="IT Contractor" />
            <Option label="Charity & Voluntary"/>
            <Option label="Digital & Creative" />
            <Option label="Estate Agency"/>
            <Option label="Graduate"/>
        </div>
        <div className="single-option-picker">
            <OptionHeader title="Job Type"/>
            <Option label="Full Time"/>
            <Option label="Part-Time" />
            <Option label="Freelance"/>
            <Option label="Temporary"/>
        </div>
        <div className="single-option-picker">
            <OptionHeader title="Temporary"/>
            <Option label="fresher" />
            <Option label="Less than 1 year"/>
            <Option label="2 Year" />
            <Option label="3 Year"/>
            <Option label="4 Year"/>
        </div>
        <div className="single-option-picker">
            <OptionHeader title="Offered Salary"/>
            <Option label="10k - 20k" />
            <Option label="20k - 30k"/>
            <Option label="30k - 40k" />
            <Option label="40k - 50k"/>
            <Option label="50k - 60k"/>
        </div>
        <div className="single-option-picker">
            <OptionHeader title="Gender"/>
            <Option label="Male" />
            <Option label="Female"/>
        </div>
        <div className="Qualification">
            <OptionHeader title="Date Posted"/>
            <Option label="Matriculation" />
            <Option label="Intermediate"/>
            <Option label="Graduate"/>
        </div>
    </div>
  );
};

const Option = (props) => {
  return (
    <div className="single-option d-flex align-items-center options">
      <input type="checkbox" id="html" className="checks" />
      <label htmlFor="">{props.label}</label>
    </div>
  );
};

const LeftSearchBox = () => {
  return (
    <div className="left-search-box">
      <input type="text" placeholder="Search keyword" />
      <input type="text" placeholder="Location" />
    </div>
  );
};
