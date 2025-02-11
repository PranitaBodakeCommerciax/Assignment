import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container
      fluid
      className="bg-black text-white text-center d-flex align-items-center justify-content-center px-3"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <h1
            className="fw-bold text-wrap"
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(40px, 8vw, 80px)", // Responsive font size
              lineHeight: "1.1em",
            }}
          >
            Just publish it
          </h1>
          <h1
            className="fw-bold text-wrap"
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(40px, 8vw, 80px)", // Responsive font size
              lineHeight: "1.1em",
            }}
          >
            with Framer
          </h1>

          <p
            className="mt-3"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "clamp(16px, 2vw, 25px)", // Responsive text size
            }}
          >
            The website builder loved by designers.
          </p>



        </Col>


        <Col xs={12} md={10} lg={8} className="mx-auto d-flex justify-content-center gap-3">
          <Button
            variant="outline-dark"
            className="px-4 py-2 fw-bold"
            style={{ color: "black", backgroundColor: "white", borderRadius: "29px" }}
          >
            Start for free
          </Button>

          <Button
            variant="dark"
            className="px-4 py-2 fw-bold text-white"
            style={{ borderRadius: "29px" }}
          >
            Watch video
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
