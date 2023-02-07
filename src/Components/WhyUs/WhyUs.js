import React from "react";
import "./WhyUs.css";
import left from "./left.png";
import rightTop from "./right-top.png";
import rightBottom from "./right-bottom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faMagnifyingGlass,
  faEnvelopeOpenText,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
const WhyUs = () => {
  return (
    <div className="why-us-area">
      <div className="container">
        <div className="row align-items-center">
          <WhyUsImg />
          <WhyUsText />
        </div>
      </div>
    </div>
  );
};
export default WhyUs;

const WhyUsImg = () => {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="why-us-img-area">
        <div className="row">
          <div className="col-6 ">
            <div className="img-left">
              <img src={left} alt="" />
            </div>
          </div>
          <div className="col-6 d-flex flex-column align-items-between">
            <div className="row mb-auto">
              <div className="img-right-top">
                <img src={rightTop} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="img-right-bottom ">
                <img src={rightBottom} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUsText = () => {
  return (
    <div className="offset-xl-1 col-xl-5 col-md-12 col-lg-6">
      <div className="why-us-text">
        <div className="why-us-text-top">
          <h2>
            Why You Choose Job <br />
            Among Other Job Site?
          </h2>
          <p>
            I truly believe Augustine’s words are true and if you look at
            history you know it is true. There are many people in the world with
            amazing talents. who realize only a small percentage of their
            potential. We all know people who live this truth.
          </p>
        </div>
        <div className="why-us-text-bottom">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6  col-sm-6">
              <div className="bottom-content">
                <h6>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  Best talented people
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-6">
              <div className="bottom-content">
                <h6>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Easy to find candidate
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="bottom-content custom-margin">
                <h6>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  Easy to communicate
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-6">
              <div className="bottom-content custom-margin">
                <h6 className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  Best recruitment option
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
