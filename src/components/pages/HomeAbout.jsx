import React from "react";
import "./HomeAbout.css";
import image1 from "../assets/images/about.jpg";

export default function HomeAbout() {
  return (
    <div className="container">
      <h1 className="about-heading">About Us</h1>
      <div className="row" style={{ marginTop: 50 }}>
        <div className="col-md-6">
          <img src={image1} className="img-fluid" alt="About Us" />
        </div>
        <div className="col-md-6">
          <div className="row about-row">
            <div className="col-md-6 col-sm-6">
              <div className="about-box">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="about-box">
                <h3>Our Vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="about-box">
                <h3>Our Values</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="about-box">
                <h3>Our Team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
