import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import image1 from "../../assets/12981629_5118756-removebg-preview.png"
import NavBar from "../../NavBar/NavBar";
import Footer from "../../pages/Footer/Footer";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={6} className="left-side">
            <img src={image1} alt="Placeholder" className="img-fluid" />
          </Col>

          <Col md={6} className="right-side">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Google Maps Embed */}
      <h1>Our Location</h1>
      <iframe
        title="Google Maps Embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.011302222768!2d85.86451921459713!3d20.296095086392108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9e5dc0d30d3%3A0x1f8cf3ed1bebccf2!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1647921090772!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0, marginTop: "20px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;