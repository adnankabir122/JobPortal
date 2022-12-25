import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact-form-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-input-field">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-input-field">
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-input-field">
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-input-field">
              <input type="text" placeholder="Enter your number" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-input-field">
              <textarea type="text-area" placeholder="Description" rows="5" cols="100"/>
            </div>
          </div>
          <div className="col-md-12">
            <div className="send-msg-btn text-center">
              <button className="btn">Send your message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
