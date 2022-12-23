import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import JobCards from "../JobCards/JobCards";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Menu/>
      <SectionHeader/>
      <JobCards/>
      <ApplyNow/>
      <Footer/>
    </div>
  );
};

export default Home;
