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
import BrowseCandidates from "./Components/BrowseCandidates/BrowseCandidates";
import EmployerDashboard from "./Components/EmployerDashboard/EmployerDashboard";
import EmployerProfile from "./Components/EmployerProfile/EmployerProfile";
import PostJob from "./Components/PostJob/PostJob";
import JobDetails from "./Components/JobDetails/JobDetails";
import CandidateDetails from "./Components/CandidateDetails/CandidateDetails";
import EmployerManageCandidates from "./Components/EmployerManageCandidates/EmployerManageCandidates";
import EmployerManageJobs from "./Components/EmployerManageJobs/EmployerManageJobs";
import EmployerPostJob from "./Components/EmployerPostJob/EmployerPostJob";
import CandidatePricingPlan from "./Components/CandidatePricingPlan/CandidatePricingPlan";


const App = () => {
  return (
      <BrowserRouter basename='/JobPortal' >
        <Routes>
          /* ------------------------------ Common Routes ----------------------------- */
          <Route path="/" element={<Home/>} />
          <Route path='/JobPortal' element={<Home/>} />
          <Route path="/jobs" element={<BrowseJob/>} />
          <Route path="/candidates" element={<BrowseCandidates/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/postjob" element={<PostJob/>} />
          <Route path="/jobDetails" element={<JobDetails/>} />
          <Route path="/candidateDetails" element={<CandidateDetails/>} />

          /* ----------------------- Candidate Dashboard Routes ----------------------- */
          <Route path="/cDash" element={<CandidateDashboard/>} />
          <Route path="/cmyProfile" element={<CandidateProfile/>} />
          <Route path="/cmyResume" element={<CandidateResume/>} />
          <Route path="/csavedJobs" element={<CandidateSavejobs/>} />
          <Route path="/cmanageJobs" element={<CandidateManageJobs/>} />
          <Route path="/cpricingPlan" element={<CandidatePricingPlan/>} />

          /* ----------------------- Employer Dashboard Routes ----------------------- */
          <Route path="/eDash" element={<EmployerDashboard/>} />
          <Route path="/emyProfile" element={<EmployerProfile/>} />
          <Route path="/eManageCandidates" element={<EmployerManageCandidates/>} />
          <Route path="/eManageJobs" element={<EmployerManageJobs/>} />
          <Route path="/ePostJobs" element={<EmployerPostJob/>} />

          /* ------------------------------ No Page Found ----------------------------- */
          <Route path="*" element={<NoPage/>} />

        </Routes>
      </BrowserRouter>
  );
};
export default App;
