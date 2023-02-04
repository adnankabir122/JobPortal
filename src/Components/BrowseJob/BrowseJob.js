import React from "react";
import "./BrowseJob.css";
import SectionHeader from "../SectionHeader/SectionHeader";

import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import JobsArea from "./JobsArea";

const BrowseJob = () => {
  return (
    <div>
      <TopNav />
      <SectionHeader title="Browse Jobs" />
      <JobsArea />
      <ApplyNow />
      <Footer />
    </div>
  );
};
export default BrowseJob;

