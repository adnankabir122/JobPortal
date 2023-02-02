import React, { useState } from "react";
import share from "./assets/share.png";
import print from "./assets/print.png";
import jobCardsData from "../JobCards/jobCardsData";
import { Link } from "react-router-dom";
import JobSingleCard from "../JobSingleCard/JobSingleCard";

const DetailsRight = () => {
  return (
    <>
      <ApplyShare />
      <QuickContacts />
      <SimilarJobs />
    </>
  );
};
export default DetailsRight;

const SimilarJobs = () => {
  const [noOfElement, setNoOfElement] = useState([2]);
  const slice = jobCardsData.slice(0, noOfElement);

  return (
    <div className="similar-jobs">
      <h4>Similar Jobs</h4>
      <div className="row">
        {/* Showing All Job Cards  */}
        {slice.map((singleData, index) => {
          return (
            <div className="col-12" as={Link} to="/jobDetails">
              <JobSingleCard
                key={index}
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
                address={singleData.address}
                companyType={singleData.companyType}
                jobType={singleData.jobType}
                time={singleData.time}
              />
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="text-center">
          <Link to="/jobs">
            <button className="btn btn-primary py-2 px-4">Browse More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
const QuickContacts = () => {
  return (
    <div className="quick-contacts-area">
      <h4>Quick Contacts</h4>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write Your Message"
      ></textarea>
      <button className="send-msg-btn w-100 text-white mb-3">
        Send Your Message
      </button>
    </div>
  );
};
const ApplyShare = () => {
  return (
    <div className="apply-share-area">
      <button className="apply-btn w-100 text-white mb-3">Apply Now</button>
      <div className="row">
        <div className="col-6">
          <div className="share-btn">
            <button className="share-btn w-100">
              <img src={share} alt="" />
              Share
            </button>
          </div>
        </div>
        <div className="col-6">
          <button className="print-btn w-100">
            <img src={print} alt="" />
            Print
          </button>
        </div>
      </div>
    </div>
  );
};
