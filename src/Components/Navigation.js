import React, { useState } from "react";
import { Navbar, Container, Button, Offcanvas, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/Logo.png";
import '../style/Navigation.css';


const Navigation = () => {
  const [show, setShow] = useState(false);

  // Toggle drawer open/close
  const handleToggle = () => setShow((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <Navbar
        style={{ backgroundColor: "rgb(0,0,0)", zIndex: 1050 }}
        className="shadow-sm"
        expand="lg"
        fixed="top"
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Navbar Brand */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={Logo} width="70" height="25" className="d-inline-block me-2" alt="Company Logo" />
          </Navbar.Brand>



          {/* Mobile View - Buttons & Toggle */}
          <div className="d-flex align-items-center d-lg-none">
            <Button variant="" className="text-white me-2" onClick={handleToggle}>Login</Button>
            <Button variant="light" size="sm" className="rounded-pill">Sign Up</Button>
            <Navbar.Toggle className="custom-toggler border-0 ms-2" onClick={handleToggle} />
          </div>


          <div>

            <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-center">
              <Nav>
                <Nav.Link href="#Start" style={{ fontSize: '18px', color: "#999" }}>Start</Nav.Link>
                <Nav.Link href="#Features" style={{ fontSize: '18px', color: "#999" }}>Features</Nav.Link>
                <Nav.Link href="#Resources" style={{ fontSize: '18px', color: "#999" }}>Resources</Nav.Link>
                <Nav.Link href="#Help" style={{ fontSize: '18px', color: "#999" }}>Help</Nav.Link>
                <Nav.Link href="#Enterprise" style={{ fontSize: '18px', color: "#999" }}>Enterprise</Nav.Link>
                <Nav.Link href="#Pricing" style={{ fontSize: '18px', color: "#999" }}>Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          {/* Desktop Login & Signup */}
          <div className="d-none d-lg-flex gap-2">
            <Button variant="link" className="text-white">Login</Button>
            <Button variant="light" size="sm" className="rounded-pill">Sign Up</Button>
          </div>
        </Container>
      </Navbar>

      {/* Full-Screen Offcanvas Drawer with Menu */}
      <Offcanvas show={show} onHide={handleToggle} placement="top" style={{ height: "100vh", backgroundColor: "black" }}>
        {/* Header Section */}
        <Offcanvas.Header closeButton style={{ backgroundColor: "black", color: "white" }}>
          <Offcanvas.Title className="d-flex align-items-center">
            <img src={Logo} width="70" height="25" className="d-inline-block me-2" alt="Company Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* Menu Section */}
        <Offcanvas.Body className="d-flex flex-column">
          <Nav className="flex-column ">
            <Nav.Link href="#Start" className="text-white">Start</Nav.Link>
            <Nav.Link href="#Features" className="text-white ">Features</Nav.Link>
            <Nav.Link href="#Resources" className="text-white ">Resources</Nav.Link>
            <Nav.Link href="#Help" className="text-white ">Help</Nav.Link>
            <Nav.Link href="#Enterprise" className="text-white ">Enterprise</Nav.Link>
            <Nav.Link href="#Pricing" className="text-white ">Pricing</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
