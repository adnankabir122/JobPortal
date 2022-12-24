import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="py-4">
        <div className="container">
          <div className="row w-100 align-items-center justify-content-between">
            <div className="col-md-2">
              <div className="logo">
                <Link to="/home">
                  <img src={logo} alt="" className="logo w-75" />
                </Link>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="main-menu w-100">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className=" w-100 d-flex justify-content-center">
                    <Nav.Link href="home" className="">
                      Home
                    </Nav.Link>
                    <Nav.Link href="jobs" className="pr-2">
                      Jobs
                    </Nav.Link>
                    <Nav.Link href="candidates" className="pr-2">
                      Candidates
                    </Nav.Link>
                    <Nav.Link href="about" className="pr-2">
                      About
                    </Nav.Link>
                    <Nav.Link href="contact" className="">
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>

            <div className="col-md-4">
              <div className="buttons d-flex justify-content-center">
                <Link to="/dashboard/serviceList">
                  <button className="btn btn-primary menu-button">
                    Sign Up
                  </button>
                </Link>
                <Link to="/dashboard/customer-order">
                  <button className="btn btn-primary menu-button">
                    Post Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Menu;
