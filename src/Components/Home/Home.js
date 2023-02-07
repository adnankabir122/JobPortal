import React from "react"
import ApplyNow from "../ApplyNow/ApplyNow"
import Footer from "../Footer/Footer"
import JobCards from "../JobCards/JobCards"
import HeroArea from "../HeroArea/HeroArea"
import "./Home.css"
import SubHeader from "../SubHeader/SubHeader"
import RoundMenu from "../RoundMenu/RoundMenu"
import BuyPackages from "../BuyPackages/BuyPackages"
import WhyUs from "../WhyUs/WhyUs"
import TopNav from "../TopNav/TopNav"

import EasyUse from "../EasyUse/EasyUse"
import HireExperts from "../HireExperts/HireExperts"
import Counter from "../Counter/Counter"

const Home = () => {
  const subHeaderData = {
    heading: "Job Offers & Candidate",
    paragraph:
      "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes",
  };

  return (
    <div>
      {/* Header Start  */}
      <div className="header">
        <div className="main-menu-container topNav-no-bg">
          <TopNav />
        </div>
        <div className="hero-area">
          <HeroArea />
        </div>
      </div>
      {/* Header End  */}

      <SubHeader subHeaderData={subHeaderData} />
      <RoundMenu link1="Jobs" link2="Candidates" />
      <JobCards />
      <HireExperts />
      <EasyUse />
      <BuyPackages />
      <WhyUs />
      <Counter />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default Home;
