import React from "react";
import "./HeroSection.css";
import HeroImage from "../assets/images/Maintenance.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, doloremque! Quibusdam inventore atque aspernatur in, maxime animi deleniti nihil eligendi molestias quia magni vero libero dolore adipisci sed consequuntur incidunt?
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="HeroImage" />
      </div>
    </div>
  );
}

export default Hero;
