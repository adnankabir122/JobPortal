import React from "react";
import "./ContactUs.css";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";
const ContactUs = () => {
  const subHeaderData = {
    heading: "Let’s Get In Touch!",
    paragraph:
      "Having great skills and specialty in software quality assurance, software testing, software requirement.",
  };

  return (
    <div>
      <div className="menu-with-bg main-bg">
        <Menu />
      </div>

      <SectionHeader title="Contact Us" />

      <SubHeader subHeaderData={subHeaderData} />

      <div className="contact-form-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-input-field">
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-input-field">
                        <input type="text" placeholder="Subject"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-input-field">
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-input-field">
                        <input type="text" placeholder="Enter your number"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
