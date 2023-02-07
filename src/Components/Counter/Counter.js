import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Counter.css"
import { faFileLines,faMagnifyingGlass,faPeopleGroup,faBriefcase} from '@fortawesome/free-solid-svg-icons'
const Counter = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          <SingleCounter
            myicon={faFileLines}
            count="1215"
            subTitle="Jobs posted"
          />
          <SingleCounter
            myicon={faMagnifyingGlass}
            count="254"
            subTitle="Jobs Filled"
          />
          <SingleCounter
            myicon={faBriefcase}
            count="204"
            subTitle="Companies"
          />
          <SingleCounter
            myicon={faPeopleGroup}
            count="227"
            subTitle="Members"
          />
        </div>
      </div>
    </div>
  );
};
export default Counter;
const SingleCounter = (props) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-counter d-flex align-items-center justify-content-center">
        <div className="counter-icon">
          <FontAwesomeIcon icon={props.myicon} />
        </div>
        <div className="counter-text">
          <div className="count">
            <h4>{props.count}</h4>
          </div>
          <div className="count-subTitle">
            <span>{props.subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
