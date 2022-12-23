import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Menu/>
      <SectionHeader/>
      <Footer/>
    </div>
  );
};

export default Home;
