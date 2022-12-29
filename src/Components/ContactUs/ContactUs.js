import React from "react";
import "./ContactUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";
import ContactForm from "./ContactForm/ContactForm";
import ContactCardArea from "./ContactCardArea/ContactCardArea";
import Footer from "../Footer/Footer";
import ApplyNow from "../ApplyNow/ApplyNow";
import TopNav from "../TopNav/TopNav";
const ContactUs = () => {
  const subHeaderData = {
    heading: "Let’s Get In Touch!",
    paragraph:
      "Having great skills and specialty in software quality assurance, software testing, software requirement.",
  };

  return (
    <div>
      <TopNav />
      <SectionHeader title="Contact Us" />
      <SubHeader subHeaderData={subHeaderData} />
      <ContactForm />
      <ContactCardArea />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default ContactUs;
