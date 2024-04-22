import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import placeholderImage from "../assets/image2.jpg";
import "./ProductCard .css"

const ProductCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllSerices")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4}>
            <Card className="product-card">
              <Card.Img variant="top" src={placeholderImage} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>Price: ${service.price}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;
