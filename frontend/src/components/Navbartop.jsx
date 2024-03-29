import React from "react";
import logo from "./../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbartop() {
  const { logout } = useLogOut();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbartop px-3 shadow">
      <Navbar
        className="py-2"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5">
              <Link style={{ textDecoration: "none" }} to="/doctors">
                <span className="fs-5 px-2 nav-link">Doctors</span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/clinics">
                <span className="fs-5 px-2 nav-link">Clinics</span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/appts">
                <span className="fs-5 px-2 nav-link">Appointments</span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/teachings">
                <span className="fs-5 px-2 nav-link">Teachings</span>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <span className="fs-5 px-2 nav-link">About</span>
              </Link>
              {user && user.user.isAdmin && (
                <Dropdown className="mt-1 mx-3">
                  <Dropdown.Toggle
                    variant="outline-success"
                    id="dropdown-basic"
                  >
                    Admin
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link style={{ textDecoration: "none" }} to="/records">
                      <Dropdown.Item href="/">Patient Records</Dropdown.Item>{" "}
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/appts">
                      <Dropdown.Item href="/">Appointments</Dropdown.Item>{" "}
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/patients">
                      <Dropdown.Item href="/">Patient Data</Dropdown.Item>{" "}
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
            <Nav>
              {!user && (
                <div>
                  <div className="d-md-none">
                    <br />
                  </div>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <span className="btn btn-outline-primary mx-1">Login</span>
                  </Link>
                  <div className="d-md-none">
                    <br />
                  </div>
                  <Link style={{ textDecoration: "none" }} to="/signup">
                    <span className="btn btn-outline-success mx-1">
                      Sign Up
                    </span>
                  </Link>
                </div>
              )}
              {user && (
                <div>
                  <div className="d-md-none">
                    <br />
                  </div>
                  <span
                    className="btn btn-outline-secondary mx-1"
                    onClick={handleLogout}
                  >
                    Log Out
                  </span>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
