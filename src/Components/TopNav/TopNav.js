import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink,Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar className="topnav" expand="xl">
      <Container>
        <Navbar.Brand className="brand">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item) => {
              return (
                <Nav.Link as={NavLink} to={item.path} key={item.name}>
                  <div className="list-items">{item.name}</div>
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ms-auto menu-button-container">
            <Link to="/register">
              <button className="menuBtn" >
                <FontAwesomeIcon icon={faUser} />
                Sign in
              </button>
            </Link>
            <Link to="/postjob">
              <button className="menuBtn m-0">
                <FontAwesomeIcon icon={faCirclePlus} />
                Post Job
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

const menuItems = [
  {
    path: "/JobPortal",
    name: "Home",
  },
  {
    path: "/jobs",
    name: "Jobs",
  },
  {
    path: "/candidates",
    name: "Candidates",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
