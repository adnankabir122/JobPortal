import React from "react";
import { CommonFormArea } from "./CommonInformation";
import del from "./img/delete.png";
import edit from "./img/edit.png";
const CommonDetails = (props) => {
  if (props.section === "education") {
    return (
      <div className="common-details-area">
        <div className="container">
          <div className="common-single-details-area">
            <CommonSingleDetails
              date="2018-pres"
              title="Masters in Software Engineering"
              university="Engineering University"
              msg={props.noicon}
            />
            <CommonSingleDetails
              date="2014 - 2018"
              title="Diploma in Graphics Design"
              university="Graphic Arts Institute"
              msg={props.noicon}
            />
            {props.status === "form" ? (
              <CommonFormArea
                buttonText="Update"
                titlein="Web Designer"
                institute="Engineering University"
                year="12-05-1996"
              >
                Have some fun and hypnotize yourself to be your very own “Ghost
                of Christmas future” and see what the future holds for you.One
                of the main areas that I work on with my clients is shedding
                these non-supportive beliefs .
              </CommonFormArea>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (props.section === "experience") {
    return (
      <div className="common-details-area">
        <div className="container">
          <div className="common-single-details-area">
            <CommonSingleDetails
              date="2014 - 2018"
              title="Secondary School Certificate"
              university="Engineering University"
              msg={props.noicon}
            />
            <CommonSingleDetails
              date="2014 - 2018"
              title="Web Designer"
              university="Inwave Studio"
              msg={props.noicon}
            />
            {props.status === "form" ? (
              <CommonFormArea
                buttonText="Update"
                titlein="Web Designer"
                institute="Engineering University"
                year="12-05-1996"
              >
                Have some fun and hypnotize yourself to be your very own “Ghost
                of Christmas future” and see what the future holds for you.One
                of the main areas that I work on with my clients is shedding
                these non-supportive beliefs .
              </CommonFormArea>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (props.section === "awards") {
    return (
      <div className="common-details-area">
        <div className="container">
          <div className="common-single-details-area">
            <CommonSingleDetails
              date="2014 - 2018"
              title="Perfect Attendance Programs"
              university="Engineering University"
              msg={props.noicon}
            />
            <CommonSingleDetails
              date="2014 - 2018"
              title="Web Designer"
              university="Inwave Studio"
              msg={props.noicon}
            />
            {props.status === "form" ? (
              <CommonFormArea
                buttonText="Update"
                titlein="Web Designer"
                institute="Engineering University"
                year="12-05-1996"
              >
                Have some fun and hypnotize yourself to be your very own “Ghost
                of Christmas future” and see what the future holds for you.One
                of the main areas that I work on with my clients is shedding
                these non-supportive beliefs .
              </CommonFormArea>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default CommonDetails;

const CommonSingleDetails = (props) => {
  return (
    <div className="common-single-details">
      <div className="row">
        <div className="col-lg-10">
          <div className="details-header">
            <span>{props.date}</span>
            <h4>{props.title}</h4>
            <h6>{props.university}</h6>
            <p>
              Have some fun and hypnotize yourself to be your very own “Ghost of
              Christmas future” and see what the future holds for you.One of the
              main areas that I work on with my clients is shedding these
              non-supportive beliefs .
            </p>
          </div>
        </div>

        {props.msg === "noicon" ? (
          <span></span>
        ) : (
          <div className="col-lg-2">
            <div className="details-icon d-flex justify-content-end">
              <button>
                <img src={del} alt="" />
              </button>
              <button>
                <img src={edit} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CommonSingleDetails };
