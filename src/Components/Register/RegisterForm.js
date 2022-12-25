import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="register-form-area">
      <div className="container">
        <div className="row">
          <FormShortField label="Username" />
          <FormShortField label="Email Address" />
          <FormShortField label="Password" />
          <FormShortField label="Confirm Password" />

          <div className="col-md-12">
            <div className="form-input-field">
              <label>Phone</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input-field">
              <label>Select Sector</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-button-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;

const FormShortField = (props) => {
  return (
    <>
      <div className="col-md-6">
        <div className="form-input-field">
          <label>
            {props.label}
            <sup>*</sup>{" "}
          </label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};
