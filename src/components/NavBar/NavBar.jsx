import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.css"; // Import CSS file for styling

function NavBar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="light"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Navbar.Brand href="#home" className="mr-auto">
        Your Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>

          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            className="dropdown-menu-right"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="outline-primary"
              className="mr-2"
              style={{ marginRight: 5 }}
            >
              Get Started
            </Button>
            <Button variant="outline-success" className="mr-2">
              Contact
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
