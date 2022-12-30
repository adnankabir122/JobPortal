import React from "react";

const FormLongField = (props) => {
  return (
    <div className="col-md-12">
      <div className="form-input-field">
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder}/>
      </div>
    </div>
  );
};

export default FormLongField;
