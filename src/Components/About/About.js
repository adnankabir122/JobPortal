import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import TopNav from "../TopNav/TopNav";
import aboutBg from "./aboutBg.png";
import "./About.css";
import BuyPackages from "../BuyPackages/BuyPackages";
import WhyUs from "../WhyUs/WhyUs";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import SecondarySingleCard from "../SecondarySingleCard/SecondarySingleCard";
import cardData from "./AboutCardData";


//About Us Start
const About = () => {
  return (
    <div>
      <TopNav />
      <SectionHeader title="About Us" />
      <MillionJobs />
      <AboutCard />
      <BuyPackages />
      <WhyUs />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default About;
//About Us End


// Others Component Start
const MillionJobs = () => {
  return (
    <div className="million-jobs-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="millions-jobs-text text-center">
              <h2>
                Millions of jobs, finds the one <br /> that's right for you
              </h2>
              <p>
                We also know those epic stories, those modern-day legends
                surrounding the early failures of such supremely <br />{" "}
                successful folks as Michael Jordan and Bill Gates. We can look a
                bit further back in time to Albert Einstein or even <br />{" "}
                further back to Abraham Lincoln.
              </p>
            </div>
            <div className="millions-jobs-img text-center ">
              <img className="w-75" src={aboutBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutCard = () => {
  return (
    <div className="about-card-area">
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
// Others Component End