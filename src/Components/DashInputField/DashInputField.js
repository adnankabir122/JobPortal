import React from 'react'

const DashInputField = (props) => {
    return (
      <div className="dash-input-field ">
        <label>{props.label}</label>
        <input type="text" className="w-100" placeholder={props.placeholder} />
      </div>
    );
  };
  

export default DashInputField
