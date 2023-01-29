import React from "react"
import ApplyNow from "../ApplyNow/ApplyNow"
import Footer from "../Footer/Footer"
import JobCards from "../JobCards/JobCards"
import HeroArea from "../HeroArea/HeroArea"
import "./Home.css"
import SubHeader from "../SubHeader/SubHeader"
import RoundMenu from "../RoundMenu/RoundMenu"
import easyUseBg from "./easyUseBg.png"
import BuyPackages from "../BuyPackages/BuyPackages"
import WhyUs from "../WhyUs/WhyUs"
import TopNav from "../TopNav/TopNav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines,faMagnifyingGlass,faPeopleGroup,faBriefcase} from '@fortawesome/free-solid-svg-icons'

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

//Hire Experts
const HireExperts = () => {
  return (
    <div className="hire-experts-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hire-experts-text">
              <h1>
                Hire Experts Freelancers Today For Any Job,
                <br /> Any Time.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Easy Use
const EasyUse = () => {
  const subHeaderData = {
    heading: "Easiest Way To Use",
    paragraph:
      "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes",
  };
  return (
    <div className="easy-use-area">
      <SubHeader subHeaderData={subHeaderData} />
      <div className="easy-use-bg-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="easy-use-bg">
                <img src={easyUseBg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Counter Start
const SingleCounter = (props) => {
  return (
    <div className="col-md-3">
      <div className="single-counter d-flex align-items-center">
        <div className="counter-icon">
        <FontAwesomeIcon icon={props.myicon} />
        </div>
        <div className="counter-text">
          <div className="count">
            <h4>{props.count}</h4>
          </div>
          <div className="count-subTitle">
            <span>{props.subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Counter = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          <SingleCounter myicon={faFileLines} count="1215" subTitle="Jobs posted"/>
          <SingleCounter myicon={faMagnifyingGlass} count="254" subTitle="Jobs Filled"/>
          <SingleCounter myicon={faBriefcase} count="204" subTitle="Companies"/>
          <SingleCounter myicon={faPeopleGroup} count="227" subTitle="Members"/>
        </div>
      </div>
    </div>
  );
};
// Counter End 
