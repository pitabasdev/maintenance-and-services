import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./ServicesNavBar.css"; // Import CSS file for styling
import logo from "../../assets/images/logo.png";
import profileIcon from "../../assets/profile-circle.svg"; // Import profile icon image

export default function ServicesNavBar() {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleProfileIconClick = () => {
    setShowUserDetails(!showUserDetails);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="light"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Navbar.Brand href="/" className="mr-auto">
        <img src={logo} alt="logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <div
            className="profile-icon-container"
            onClick={handleProfileIconClick}
          >
            <img src={profileIcon} alt="profile" className="profile-icon" />
            {showUserDetails && (
              <div className="user-details">
                <p>Name: John Doe</p>
                <p>Email: john.doe@example.com</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
