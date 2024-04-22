import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Image.css"; // Import custom CSS file
import ac from "../../assets/images/acservices.jpg"
import fridge from "../../assets/images/fridge.jpg"
import fridge2 from "../../assets/images/fridge2.jpg"
import wiring from "../../assets/images/wiring.jpg"
import cooler from "../../assets/images/cooler.jpg"
import cooler2 from "../../assets/images/cooler2.png"
import wasing from "../../assets/images/washing.jpg"

const Image = () => {
  // Placeholder images
  const images = [
    { src: ac, alt: "Image 1" },
    { src: fridge, alt: "Image 2" },
    { src: fridge2, alt: "Image 3" },
    { src: wiring, alt: "Image 4" },
    { src: cooler, alt: "Image 5" },
    { src: cooler2, alt: "Image 6" },
    { src: wasing, alt: "Image 7" },
    { src: "https://via.placeholder.com/250x250", alt: "Image 8" },
    { src: "https://via.placeholder.com/300x300", alt: "Image 9" },
    { src: "https://via.placeholder.com/350x350", alt: "Image 10" },
    { src: "https://via.placeholder.com/300x300", alt: "Image 11" },
    { src: "https://via.placeholder.com/350x350", alt: "Image 12" },
  ];

  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3}>
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="img-fluid" />
              <div className="image-overlay">
                <div className="overlay-text">{image.alt}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Image;
