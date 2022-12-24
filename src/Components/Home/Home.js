import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import JobCards from "../JobCards/JobCards";
import JobOffer from "../JobOffer/JobOffer";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import HeroArea from "./HeroArea/HeroArea";
import "./Home.css";

const Home = () => {
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
        <JobOffer/>
        <JobCards />
      </div>

      <ApplyNow />
      <Footer />
    </div>
  );
};

export default Home;
