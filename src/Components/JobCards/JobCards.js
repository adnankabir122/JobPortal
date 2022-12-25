import React from "react";
import "./JobCards.css";
import JobSingleCard from "./JobSingleCard";
import jobCardsData from "./jobCardsData";

const JobCards = () => {
  return (
    <div className="job-card-area">
      <div className="container">
        <div className="row">
          {jobCardsData.map((singleData, index) => {
            return (
              <JobSingleCard
                img={singleData.img}
                title={singleData.title}
                subTitle={singleData.subTitle}
                address={singleData.address}
                companyType={singleData.companyType}
                jobType={singleData.jobType}
                time={singleData.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCards;
// <div className="job-card-area">
//   <div className="container">
//     <div className="row">
//       {jobCardsData.map((singleData, index) => {
//         return (
//           <JobSingleCard
//             img={singleData.img}
//             title={singleData.title}
//             subTitle={singleData.subTitle}
//             address={address}
//             companyType={companyType}
//             jobType={jobType}
//             time={time}
//           />
//         );
//       })}
//     </div>
//   </div>
// </div>
