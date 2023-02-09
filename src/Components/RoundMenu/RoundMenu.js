import React from "react";
import "./RoundMenu.css";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="">{props.link1}</NavLink>
                  </li>
                  <li>
                    <NavLink to="">{props.link2}</NavLink>
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
