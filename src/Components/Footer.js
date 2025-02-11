import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/img/Logo.png';


function Footer() {
  return (
    <Container fluid className="bg-dark text-light py-4">


      <Row>

        <Col sm={2} xs={6} className="mb-3">
          <h5 style={{ fontSize: "1rem", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>Resources</h5>
          <ul style={{ fontSize: "1rem", color: "#999", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="list-unstyled">
            <li>Desktop app</li>
            <li>Figma plugin</li>
            <li>HTML plugin</li>
            <li>Developers</li>
            <li>Startup kit</li>
          </ul>
        </Col>

        {/* Company */}
        <Col sm={2} xs={6} className="mb-3">
          <h5 style={{ fontSize: "1rem", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>Company</h5>
          <ul style={{ fontSize: "1rem", color: "#999", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="list-unstyled">
            <li>Careers</li>
            <li>Report</li>
            <li>Status</li>
            <li>Legal</li>
            <li>Blog</li>
          </ul>
        </Col>

        {/* Creators */}
        <Col sm={2} xs={6} className="mb-3">
          <h5 style={{ fontSize: "1rem", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>Creators</h5>
          <ul style={{ fontSize: "1rem", color: "#999", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="list-unstyled">
            <li>Wallpapers</li>
            <li>Partners</li>
            <li>Payouts</li>
            <li>Events</li>
            <li>Brand</li>
          </ul>
        </Col>

        {/* Compare */}
        <Col sm={2} xs={6} className="mb-3">
          <h5 style={{ fontSize: "1rem", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>Compare</h5>
          <ul style={{ fontSize: "1rem", color: "#999", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="list-unstyled">
            <li>WordPress</li>
            <li>Contentful</li>
            <li>Unbounce</li>
            <li>Webflow</li>
            <li>Figma</li>
          </ul>
        </Col>

        {/* Social */}
        <Col sm={2} xs={5} className="mb-3">
          <h5 style={{ fontSize: "1rem", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>Social</h5>
          <ul style={{ fontSize: "1rem", color: "#999", wordWrap: "break-word", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="list-unstyled">
            <li>X Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
            <li>Threads</li>
          </ul>
        </Col>


        <Col sm={2} xs={6} className="mb-3">
          <ul>
            <div style={{ width: "15px", height: "15px", backgroundSize: "100% 100%", imageRendering: "pixelated" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" role="img" aria-label="Framer Logo">
                <path d="M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z" fill="rgb(255, 255, 255)"></path>
              </svg>
            </div>
          </ul>
        </Col>
      </Row>

    </Container>
  );
}

export default Footer;


