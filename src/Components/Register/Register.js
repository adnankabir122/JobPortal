import React from "react";
import Menu from "../Menu/Menu";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SectionHeader/SubHeader/SubHeader";
import "./Register.css";
const Register = () => {
  const subHeaderData = {
    heading: "Create Your Account",
    paragraph: "Choose Your Account Type",
  };
  return (
    <div>
      <div className="menu-with-bg main-bg">
        <Menu/>
      </div>
      <SectionHeader title="Register" />
      <SubHeader subHeaderData={subHeaderData} />
    </div>
  );
};

export default Register;
