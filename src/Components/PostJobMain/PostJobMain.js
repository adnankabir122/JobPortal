import React from "react";
import "./PostJobMain.css";
const PostJobMain = () => {
  return (
    <div className="post-job-main">
      <div className="container">
        {/* Post Job Top Start  */}
        <div className="row">
          <div className="col-lg-12">
            <PostJobField label="Job Title" star="*" />
          </div>
          <div className="col-lg-12">
            <PostJobField label="Email Address" star="*" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PostJobField label="Application Deadline" />
          </div>
          <div className="col-lg-4">
            <PostJobSelect label="Job Type" star="*" />
          </div>
          <div className="col-lg-4">
            <PostJobSelect label="Positions Available:" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PostJobSelect label="Job Category:" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PostJobField label="Salary" star="*" />
          </div>
          <div className="col-lg-4">
            <PostJobSelect label="Minimum" />
          </div>
          <div className="col-lg-4">
            <PostJobSelect label="Maximum" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label>Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-100"
            ></textarea>
          </div>
        </div>
        {/* Post Job Top End */}

        {/* Post Job Middle Start  */}
        <div className="row">
          <div className="col-lg-12">
            <div className="post-job-subtitle">
              <h4>Others Information</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PostJobField label="Offered Salary" />
          </div>
          <div className="col-lg-6">
            <PostJobSelect label="Gender" star="*" />
          </div>
          <div className="col-lg-6">
            <PostJobField label="Department" />
          </div>
          <div className="col-lg-6">
            <PostJobSelect label="Experience" star="*" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PostJobSelect label="Qualifications" star="*" />
          </div>
        </div>
        {/* Post Job Middle End  */}

        {/* Post Job Bottom Start  */}
        <div className="row">
          <div className="col-lg-12">
            <div className="post-job-subtitle">
              <h4>Address/Location</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PostJobField label="Country" />
          </div>
          <div className="col-lg-6">
            <PostJobField label="City" />
          </div>
          <div className="col-lg-12">
            <PostJobField label="Full Address" star="*" />
          </div>
        </div>
        {/* Post Job Bottom End  */}
        <div className="row">
          <div className="col-lg-12">
            <div className="post-job-subtitle">
              <h6>File Attachment</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>

        <div className="post-job-btn">
            <button className="btn btn-primary">Post Job</button>
        </div>
      </div>
    </div>
  );
};
export default PostJobMain;

const PostJobField = (props) => {
  return (
    <div className="post-job-field">
      {props.star ? (
        <label>
          {props.label}
          <sup>*</sup>
        </label>
      ) : (
        <label>{props.label}</label>
      )}
      <input type="text" className="w-100" />
    </div>
  );
};
const PostJobSelect = (props) => {
  return (
    <div className="post-job-select">
      {props.star ? (
        <label for="cars" className="d-block">
          {props.label}
          <sup>*</sup>
        </label>
      ) : (
        <label for="cars" className="d-block">
          {props.label}
        </label>
      )}
      <select name="cars" id="cars" className="w-100">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};
