import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Components/About/About";
import BrowseJob from "./Components/BrowseJob/BrowseJob";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import NoPage from "./Components/NoPage/NoPage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login"
import CandidateDashboard from "./Components/CandidateDashboard/CandidateDashboard";
import CandidateProfile from "./Components/CandidateProfile/CandidateProfile";
import CandidateResume from "./Components/CandidateResume/CandidateResume";
import CandidateSavejobs from "./Components/CandidateSavejobs/CandidateSavejobs";
import CandidateManageJobs from "./Components/CandidateManageJobs/CandidateManageJobs";
import CandidatePricingPlan from "./Components/CandidatePricingPlan/CandidatePricingPlan";
import BrowseCandidates from "./Components/BrowseCandidates/BrowseCandidates";
import EmployerDashboard from "./Components/EmployerDashboard/EmployerDashboard";
import EmployerProfile from "./Components/EmployerProfile/EmployerProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="jobs" element={<BrowseJob/>} />
          <Route path="candidates" element={<BrowseCandidates/>} />
          <Route path="candidates" element={<About/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="candidateDashboard" element={<CandidateDashboard/>} />
          <Route path="myProfile" element={<CandidateProfile/>} />
          <Route path="myResume" element={<CandidateResume/>} />
          <Route path="savedJobs" element={<CandidateSavejobs/>} />
          <Route path="manageJobs" element={<CandidateManageJobs/>} />
          <Route path="pricingPlan" element={<CandidatePricingPlan/>} />
          <Route path="employerDashboard" element={<EmployerDashboard/>} />
          <Route path="emyProfile" element={<EmployerProfile/>} />
          <Route path="demo" element={<Login/>} />
          
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
