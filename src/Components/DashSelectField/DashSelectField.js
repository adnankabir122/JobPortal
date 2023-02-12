import React from 'react'

const DashSelectField = (props) => {
    return (
      <div className="post-job-select">
        <label  className="d-block">
          {props.label}
        </label>
        <select id="cars" className="w-100">
          <option value="volvo">{props.placeholder ? props.placeholder : "Options"}</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  };
  
export default DashSelectField
