import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Image.css"; // Import custom CSS file

const Image = () => {
  // Placeholder images
  const images = [
    { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
    { src: "https://via.placeholder.com/200x300", alt: "Image 2" },
    { src: "https://via.placeholder.com/400x250", alt: "Image 3" },
    { src: "https://via.placeholder.com/250x400", alt: "Image 4" },
    { src: "https://via.placeholder.com/350x150", alt: "Image 5" },
    { src: "https://via.placeholder.com/150x350", alt: "Image 6" },
    { src: "https://via.placeholder.com/200x200", alt: "Image 7" },
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
