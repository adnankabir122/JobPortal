import React from "react";
import "./RoundMenu.css"
const RoundMenu = (props) => {
  return (
    <div className="rounded-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="offer-nav d-flex justify-content-center">
              <nav>
                <ul className="d-flex">
                  <li>
                    <a href="#">{props.link1}</a>
                  </li>
                  <li>
                    <a href="#">{props.link2}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundMenu;
