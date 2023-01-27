import React from "react";
import "./ContactUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SubHeader/SubHeader";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import ApplyNow from "../ApplyNow/ApplyNow";
import TopNav from "../TopNav/TopNav";
import cardData from "./contactCardData";
import SecondarySingleCard from "./SecondarySingleCard/SecondarySingleCard";
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

const ContactCardArea = () => {
  return (
    <div className="contact-card-area">
      <div className="container">
        <div className="row">
          {cardData.map((singleData, index) => {
            return (
              <SecondarySingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
