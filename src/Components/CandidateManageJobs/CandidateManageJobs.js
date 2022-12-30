import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faPen,faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import DashboardMenu from "../DashboardTop/DashboardMenu";
import DashboardTop from "../DashboardTop/DashboardTop";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import "./CandidateManageJobs.css";
const CandidateManageJobs = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <ManageJobTitle />
      <ManageJobTable />
      <Footer />
    </div>
  );
};
export default CandidateManageJobs;

const ManageJobTitle = () => {
  return (
    <div className="manage-job-title-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="jobTitle-left">
              <DashboardHeading text="Manage Jobs" />
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="jobTitle-right">
              <h1>Manage Jobs</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const ManageJobTable = () => {
  return (
    <div className="manage-job-table-area">
      <div className="container">
        <div className="manage-job-table">
          <table class="table table-bordered">
            <thead className="tableHead">
              <tr>
                <th scope="col">Job Title</th>
                <th scope="col">Applications</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableSingleJob1
                  title="Job1"
                  date="Expiry: 2020-04-15"
                  address="Address: Wellesley Rd, London"
                />
                <TableSingleJob2 text="Applications" />
                <TableSingleJob3 icon1={faEye} icon2={faPen} icon3={faTrash}/>
              </tr>
              <tr>
                <TableSingleJob1
                  title="Job1"
                  date="Expiry: 2020-04-15"
                  address="Address: Wellesley Rd, London"
                />
                <TableSingleJob2 text="Applications" />
                <TableSingleJob3 icon1={faEye} icon2={faPen} icon3={faTrash}/>
              </tr>
              <tr>
                <TableSingleJob1
                  title="Job1"
                  date="Expiry: 2020-04-15"
                  address="Address: Wellesley Rd, London"
                />
                <TableSingleJob2 text="Applications" />
                <TableSingleJob3 icon1={faEye} icon2={faPen} icon3={faTrash}/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TableSingleJob1 = (props) => {
  return (
    <td>
      <div>
        <h6>{props.title}</h6>
        <p>{props.date}</p>
        <p>{props.address}</p>
      </div>
    </td>
  );
};
const TableSingleJob2 = (props) => {
  return (
    <td>
      <div>
        <p>{props.text}</p>
      </div>
    </td>
  );
};
const TableSingleJob3 = (props) => {
  return (
    <td>
      <div>
        <span><FontAwesomeIcon icon={props.icon1} /></span>
        <span><FontAwesomeIcon icon={props.icon2} /></span>
        <span><FontAwesomeIcon icon={props.icon3} /></span>
      </div>
    </td>
  );
};

