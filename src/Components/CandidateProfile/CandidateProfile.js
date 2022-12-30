import React from "react";
import DashboardMenu from "../DashboardTop/DashboardMenu";
import DashboardTop from "../DashboardTop/DashboardTop";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import "./CandidateProfile.css";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import FormShortField from "../Register/FormShortField";
import FormLongField from "../Register/FormLongField";
const CandidateProfile = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <MyProfileForm />
      <DashboardSocialLink />
      <Footer />
    </div>
  );
};

export default CandidateProfile;

const MyProfileForm = () => {
  return (
    <div className="basic-info-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Basic Information" />
        </div>
        <div className="row">
          <FormShortField
            label="Your Name"
            placeholder="Kamrul Hasan Mreedul"
          />
          <FormShortField label="Email" placeholder="khmreedul@gmail.com" />
          <FormShortField label="Date of birth" placeholder="08/11/1999" />
          <FormShortField label="Phone" placeholder="+(123) 345-6789" />
          <FormShortField label="Gender " placeholder="Female" />
          <FormShortField label="Qualifications " placeholder="PHD" />
          <FormShortField label="Job Title" placeholder="General Insurance" />
          <FormShortField label="Salary" placeholder="33,000" />
          <FormLongField
            label="Enter Your Location"
            placeholder="214 West Arnold St. New York, NY 10002"
          />

          <label className="dash-des-label">Description</label>
          <div className="col-md-12">
            <div className="contact-input-field">
              <textarea
                type="text-area"
                placeholder="214 West Arnold St. New York, NY 10002"
                rows="5"
                cols="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardSocialLink = () => {
  return (
    <div className="dashboard-social-form-area">
      <div className="container">
        <div className="row">
          <DashboardHeading text="Social Links" />
        </div>
        <div className="row">
          <FormShortField
            label="Facebook"
            placeholder="https://www.facebook.com/"
          />
          <FormShortField label="Twitter" placeholder="https://www.facebook.com/" />
          <FormShortField label="Linkedin" placeholder="https://www.facebook.com/" />
          <FormShortField label="Website" placeholder="https://www.facebook.com/" />
        </div>
      </div>
    </div>
  );
};
