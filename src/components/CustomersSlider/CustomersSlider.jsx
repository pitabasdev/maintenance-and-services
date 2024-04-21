import React from "react";
import { Carousel } from "react-bootstrap";
import "./CustomersSlider.css";
import image3 from "../assets/image3.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const CustomersSlider = () => {
  return (
    <div className="my-custom-container">
      <h1 className="my-custom-heading">Our Happy Clients</h1>
      <Carousel className="my-custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomersSlider;
