import React from "react";

const FormShortField = (props) => {
  return (
    <div className="col-md-6">
      <div className="form-input-field">
        <label>
          {props.label}
          <sup>*</sup>{" "}
        </label>
        <input type="text" placeholder={props.placeholder}/>
      </div>
    </div>
  );
};

export default FormShortField;
