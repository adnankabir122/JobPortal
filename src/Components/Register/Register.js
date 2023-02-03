import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import SubHeader from "../SubHeader/SubHeader"
import TopNav from "../TopNav/TopNav"
import RegisterForm from "./RegisterForm"
import RoundMenu from "../RoundMenu/RoundMenu"
import SocialLogin from "../SocialLogin/SocialLogin"
import ApplyNow from "../ApplyNow/ApplyNow"
import Footer from "../Footer/Footer"

const Register = () => {
  const subHeaderData = {
    heading: "Create Your Account",
    paragraph: "Choose Your Account Type",
  };
  return (
    <div>
      <TopNav/>
      <SectionHeader title="Register" />
      <SubHeader subHeaderData={subHeaderData} />
      <RoundMenu link1="Employer" link2="Candidate"/>
      <RegisterForm/>
      <SocialLogin/>
      <ApplyNow/>
      <Footer/>
    </div>
  );
};

export default Register;
