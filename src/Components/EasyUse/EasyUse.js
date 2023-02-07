import React from 'react'
import SubHeader from '../SubHeader/SubHeader';
import easyUseBg from "./easyUseBg.png"
import "./EasyUse.css" 
const EasyUse = () => {
    const subHeaderData = {
      heading: "Easiest Way To Use",
      paragraph:
        "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes",
    };
    return (
      <div className="easy-use-area">
        <SubHeader subHeaderData={subHeaderData} />
        <div className="easy-use-bg-area text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="easy-use-bg">
                  <img src={easyUseBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default EasyUse
