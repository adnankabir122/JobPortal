import React from "react";
import EmployerDashboardTop from "../EmployerDashboard/EmployerDashboardTop";
import TopNav from "../TopNav/TopNav";
import EmployerDashboardMenu from "../EmployerDashboard/EmployerDashboardMenu"
import Footer from "../Footer/Footer";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import FormShortField from "../Register/FormShortField";
import FormLongField from "../Register/FormLongField";

const EmployerProfile = () => {
  return (
    <div>
      <TopNav />
      <div className="edashboard-with-menu">
        <EmployerDashboardTop />
        <EmployerDashboardMenu />
      </div>
      <MyProfileForm />
      <DashboardSocialLink />
      <Footer />
    </div>
  );
};

export default EmployerProfile;
const MyProfileForm = () => {
    return (
      <div className="basic-info-area">
        <div className="container">
          <div className="row">
            <DashboardHeading text="Basic Information" />
          </div>
          <div className="row">
            <FormShortField
              label="Company Name"
              placeholder="Fleet Improvements Pvt"
            />
            <FormShortField label="Email" placeholder="khmreedul@gmail.com" />
            <FormShortField label="First Name" placeholder="Kamrul Hasan Mreedul" />
            <FormShortField label="Last Name" placeholder="Mreedul" />
            <FormShortField label="Date of Founded " placeholder="08/11/1999" />
            <FormShortField label="Phone " placeholder="+(123) 345-6789" />
            <FormShortField label="Sector " placeholder="General Insurance" />
            <FormShortField label="Website  " placeholder="example.com" />
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
  