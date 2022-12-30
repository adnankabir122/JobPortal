import React from "react";
import "./RegisterForm.css";
import FormShortField from "./FormShortField";
import FormLongField from "./FormLongField";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="register-form-area">
      <div className="container">
        <div className="row">
          <FormShortField label="Username" />
          <FormShortField label="Email Address" />
          <FormShortField label="Password" />
          <FormShortField label="Confirm Password" />
          <FormLongField label="Phone" />
          <FormLongField label="Select Sector" />
          <FormButton/>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;

const FormButton = () => {
  return (
    <div className="col-md-12">
      <div className="form-button-area d-flex justify-content-between align-items-center">
        <Link to="/login">
          <button>Sign Up</button>
        </Link>
        <div className="already-registered">
          <span className="already-text">
            Already registered?
            <Link to="/login">
              <span className="sign-in-text">Sign in here</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
