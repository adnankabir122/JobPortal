import React from "react";
import "./PostJob.css";
import TopNav from "../TopNav/TopNav";
import SectionHeader from "../SectionHeader/SectionHeader";
import ApplyNow from "../ApplyNow/ApplyNow";
import Footer from "../Footer/Footer";
import PostJobMain from "../PostJobMain/PostJobMain";
const PostJob = () => {
  return (
    <div>
      <TopNav />
      <SectionHeader title="Post A New Job" />
      <PostJobMain/>
      <ApplyNow/>
      <Footer/>
    </div>
  );
};

export default PostJob;

