import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNav.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopNav = () => {
  const menuItems = [
    {
      path: "/home",
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
  return (
    <Navbar className="topnav" expand="lg">
      <Container>
        <Navbar.Brand className="brand">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItems.map((item) => {
              return (
                <Nav.Link as={Link} to={item.path} key={item.name}>
                  <div className="list-items">{item.name}</div>
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ms-auto">
            <Link to="/register">
              <button className="menuBtn noBg" >
                <FontAwesomeIcon icon={faUser} />
                Sign in
              </button>
            </Link>
            <Link to="/jobs">
              <button className="menuBtn m-0 hasBg">
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
