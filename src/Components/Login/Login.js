import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import FormLongField from "../Register/FormLongField";
import RoundMenu from "../RoundMenu/RoundMenu";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";
import SocialLogin from "../SocialLogin/SocialLogin";
import TopNav from "../TopNav/TopNav";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const subHeaderData = {
    heading: "Login to Your Account",
    paragraph: "Choose Your Account Type",
  };
  return (
    <div>
      <TopNav />
      <SectionHeader title="Login" />
      <SubHeader subHeaderData={subHeaderData} />
      <RoundMenu link1="Employer" link2="Candidate" />
      <div className="login-form-area">
        <div className="container">
          <div className="row">
            <FormLongField label="Username / Email Address" />
            <FormLongField label="Password" />
            <FormButton/>
          </div>
        </div>
      </div>
      <SocialLogin />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default Login;
const FormButton = () => {
  return (
    <div className="col-md-12">
      <div className="form-button-area d-flex justify-content-between align-items-center">
        <Link to="/login">
          <button>Sign in</button>
        </Link>
        <div className="already-registered">
          <span className="already-text">
            Don't have an account?
            <Link to="/register">
              <span className="sign-in-text">Sign up here</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};