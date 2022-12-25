import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import JobCards from "../JobCards/JobCards";
import Menu from "../Menu/Menu";
import HeroArea from "./HeroArea/HeroArea";
import "./Home.css";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";

const Home = () => {
  const subHeaderData = {
    heading: "Job Offers & Candidate",
    paragraph:
      "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes",
  };

  return (
    <div>
      <div className="header">
        <div className="main-menu-container">
          <Menu />
        </div>
        <div className="hero-area">
          <HeroArea />
        </div>
      </div>

      <div className="main">
        <SubHeader subHeaderData={subHeaderData} />
        <JobCards />
      </div>

      <ApplyNow />
      <Footer />
    </div>
  );
};

export default Home;
