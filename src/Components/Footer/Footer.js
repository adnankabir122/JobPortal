import React from "react";
import "./Footer.css";
import logo from "./logo-footer.png";
import design_trends from "./design-trends.png";
import ui_experts from "./ui-experts.png";
const Footer = () => {
  return (
    <div className="footer-area">
      {/* Footer Top Start    */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-top-content">
                <img src={logo} alt="" />
                <p>
                  We shows only the best websites and portfolios built
                  completely with passion.
                </p>
                <h4>Office Address</h4>
                <p>2 holt street, Surlly Halli, Road 16, Canada</p>
                <p>(455) 312-5489</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-top-content">
                <h4>Recent Posts</h4>
                <ul className="delivery_info">
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Delivery Information</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Customer Support</a>
                  </li>
                  <li>
                    <a href="">Contact With An Expert</a>
                  </li>
                  <li>
                    <a href="">Community Updates</a>
                  </li>
                  <li>
                    <a href="">Upcoming Updates</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-top-content">
                <div className="recent-post">
                  <h4>Office Address</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="col-md-2">
                        <div className="inner-img">
                          <img src={design_trends} alt="" />
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="inner-text">
                          <h4>Website Design Trends For 2018</h4>
                          <span>Aug 17,2021</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="col-md-6">
                        <div className="inner-img">
                          <img src={design_trends} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inner-text">
                          <h4>Website Design Trends For 2018</h4>
                          <span>Aug 17,2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-top-content">
                <h4>Newsletter</h4>
                <p>We shows only the best websites and portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}

      {/* Footer Bottom Start  */}
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
      {/* Footer Bottom End  */}
    </div>
  );
};

export default Footer;
