import React from "react";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";
import "./Login.css";
const Login = () => {
  const subHeaderData = {
    heading: "Login to Your Account",
    paragraph: "Choose Your Account Type",
  };
  return (
    <div>
      <div className="menu-with-bg main-bg">
        <Menu />
      </div>
      <SectionHeader title="Login" />
      <SubHeader subHeaderData={subHeaderData} />
    </div>
  );
};
export default Login;
