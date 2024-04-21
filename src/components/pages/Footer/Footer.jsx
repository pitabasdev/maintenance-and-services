import React from "react";
import "./Footer.css"; // Import CSS file for custom styles
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">
              Your Company's tagline goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#/">Home</a>
                  </li>
                  <li>
                    <a href="#/">About</a>
                  </li>
                  <li>
                    <a href="#/">Services</a>
                  </li>
                  <li>
                    <a href="#/">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Resources</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#/">Blog</a>
                  </li>
                  <li>
                    <a href="#/">FAQs</a>
                  </li>
                  <li>
                    <a href="#/">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Connect with Us</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#/">Facebook</a>
                  </li>
                  <li>
                    <a href="#/">Twitter</a>
                  </li>
                  <li>
                    <a href="#/">Instagram</a>
                  </li>
                  <li>
                    <a href="#/">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Subscribe to Our Newsletter</h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="subscribe-btn"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  id="subscribe-btn"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
