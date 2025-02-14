import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Section_Background from "../assets/img/Section_Background.png";
import { Sparkles } from "lucide-react";
import { Button } from "react-bootstrap";


const Canvas_Section = () => {
  return (
    <Container
      fluid
      className="text-center p-4"
      style={{
        backgroundImage: `url(${Section_Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12}>


          <div
            className="framer-nmukg8 hidden-1ddkefe"
            data-framer-appear-id="nmukg8"
            data-framer-name="Visual-mobile@2x"
            style={{
              //  opacity: 1,
              willChange: "transform",
              transform: "none",
              borderRadius: "20px",
              overflow: "hidden",
              maxWidth: "100%",
              margin: "0 auto",
              //backgroundColor: "rgba(255, 255, 255, 0.2)", // Adds slight transparency effect
              // backdropFilter: "blur(10px)",
              padding: "20px",
            }}
          >

<Button
      className="d-flex align-items-center justify-content-center gap-2 custom-btn"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white
        backdropFilter: "blur(10px)", // Blur effect
        border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
        borderRadius: "50px",
        fontWeight: "bold",
        fontSize: "12px",
        color: "#FFF", // White text
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        filter: "saturate(1.4)", // Color enhancement
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
        padding: "6px 14px",
      }}
    >
      <Sparkles size={14} color="white" /> New: Layout Templates
    </Button>s
            <img
              decoding="async"
              className="img-fluid"
              sizes="calc((100vw - 10px) * 1.5)"
              srcSet="
                https://framerusercontent.com/images/V6Iu9tmy4E2XpjORfr3l1eBhog.png?scale-down-to=512 512w,
                https://framerusercontent.com/images/V6Iu9tmy4E2XpjORfr3l1eBhog.png?scale-down-to=1024 1024w,
                https://framerusercontent.com/images/V6Iu9tmy4E2XpjORfr3l1eBhog.png?scale-down-to=2048 2048w,
                https://framerusercontent.com/images/V6Iu9tmy4E2XpjORfr3l1eBhog.png 2400w
              "
              src="https://framerusercontent.com/images/V6Iu9tmy4E2XpjORfr3l1eBhog.png?scale-down-to=2048"
              alt="Framer Mobile Visual"
              style={{
                width: "85%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "inherit",
                marginTop: '20px'
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Canvas_Section;


