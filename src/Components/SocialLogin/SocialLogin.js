import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const SocialLogin = () => {
  return (
    <div className="social-login-area">
      <div className="container">
        <div className="row">
          <div className="social-heading text-center">
            <h6>Login or Sign up with</h6>
          </div>
        </div>

        <div className="row social-card-container text-center">
          <SocialCard media="Facebook" myicon={faFacebookF} color="#466CA9" />
          <SocialCard media="Twitter" myicon={faTwitter} color="#31ACDA" />
          <SocialCard media="Google" myicon={faGooglePlusG} color="#D34836" />
          <SocialCard media="Linkedin" myicon={faLinkedin} color="#13799F" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
const SocialCard = (props) => {
  const myStyle = {
    background: `${props.color}`,
  };
  return (
    <div className="col-md-6">
      <div className="social-card text-white" style={myStyle}>
        <p>
          <FontAwesomeIcon icon={props.myicon} />
          Log In with {props.media}
        </p>
      </div>
    </div>
  );
};
