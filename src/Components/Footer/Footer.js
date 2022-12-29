import React from "react";
import "./Footer.css";
import logo from "./logo-footer.png";
import design_trends from "./design-trends.png";
import facebook from "./facebook.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import behance from "./behance.png";
import uiExperts from "./ui-experts.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faCalendar,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-area text-white">
      {/* Footer Top Start    */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <OfficeAddress />
            </div>
            <div className="col-md-3">
              <DeliveryInfo />
            </div>
            <div className="col-md-3">
              <RecentPost />
            </div>
            <div className="col-md-3">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Top End */}
      <FooterBottom />
    </div>
  );
};
export default Footer;

// Components

// Office Address Start
const OfficeAddress = () => {
  return (
    <div className="footer-top-content one">
      <img src={logo} alt="" className="footer-logo" />
      <p>
        We shows only the best websites <br /> and portfolios built completely{" "}
        <br /> with passion.
      </p>
      <h4>Office Address</h4>
      <div className="address-content">
        <div className="content-one d-flex">
          <FontAwesomeIcon icon={faLocationDot} />
          <p> 2 holt street, Surlly Halli, Road 16, Canada</p>
        </div>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          (455) 312-5489
        </p>
      </div>
    </div>
  );
};
//Office Address End

// Newsletter start
const Newsletter = () => {
  return (
    <div className="footer-top-content news">
      <h4>Newsletter</h4>
      <p>We shows only the best websites and portfolios.</p>
      <div className="newsletter-input">
        <input type="text" className="w-100" placeholder="Email" />
        <div className="location-arr">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
      </div>
      <div className="newspaper-social-icon d-flex justify-content-between">
        <div className="social-single-icon">
          <img src={facebook} alt="" />
        </div>
        <div className="social-single-icon">
          <img src={twitter} alt="" />
        </div>
        <div className="social-single-icon">
          <img src={linkedin} alt="" />
        </div>
        <div className="social-single-icon">
          <img src={behance} alt="" />
        </div>
        <div className="social-single-icon">
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
};
// Newsletter End

// Delivery Info Start
const DeliveryList = (props) => {
  return (
    <li>
      <a href="">{props.name}</a>
    </li>
  );
};
const DeliveryInfo = () => {
  return (
    <div className="footer-top-content">
      <h4>Delivery Info</h4>
      <ul className="delivery_info">
        <DeliveryList name="About" />
        <DeliveryList name="Delivery Information" />
        <DeliveryList name="Terms & Conditions" />
        <DeliveryList name="Customer Support" />
        <DeliveryList name="Contact With An Expert" />
        <DeliveryList name="Community Updates" />
        <DeliveryList name="Upcoming Updates" />
      </ul>
    </div>
  );
};
// Delivery Info End

// Footer Bottom Start
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-bottom-content text-center">
              <p>2021&copy;All rights reserved by Mreedul</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Footer Bottom End

//RecentPost Start
const RecentPost = () => {
  return (
    <div className="footer-top-content">
      <div className="recent-post">
        <h4>Recent Post</h4>
        <div className="row">
          <div className="post d-flex align-items-center">
            <div className="inner-img">
              <img src={design_trends} alt="" />
            </div>
            <div className="inner-text">
              <h6>
                Website Design <br /> Trends For 2018
              </h6>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <span>Aug 17,2021</span>
              </div>
            </div>
          </div>
          <div className="post d-flex align-items-center">
            <div className="inner-img">
              <img src={uiExperts} alt="" />
            </div>
            <div className="inner-text">
              <h6>UI Experts And Modern Designs</h6>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <span>Aug 17,2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//RecentPost End
