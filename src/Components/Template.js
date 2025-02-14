import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../assets/videos/card.mp4";
import video1 from "../assets/videos/card1.mp4";
import video2 from "../assets/videos/card2.mp4";
import video3 from "../assets/videos/card3.mp4";
import video4 from "../assets/videos/card4.mp4";
import video5 from "../assets/videos/card5.mp4";

const WebsiteGrid = () => {
    return (
        <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
            <Container className="py-4">
                <Row className="py-4">
                    <Col>
                        <h3
                            className="m-0"
                            style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "61px",
                                textAlign: "left",
                            }}
                        >
                            <b>Websites that stand <br /> out start in Framer</b>
                        </h3>
                    </Col>
                </Row>

                <Row className="g-2">
                    <Col md={8} className="p-2">
                        <Card className="text-center bg-light card-hover" style={{ height: "400px", border: "15px solid rgb(21, 0, 255)", borderRadius: "10px", overflow: "hidden" }}>
                            <Card.Body className="p-0">
                                <video className="w-100 h-100" autoPlay loop muted playsInline>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Card.Body>
                        </Card>

                        <Row className="g-2 mt-1">
                            <Col xs={12} md={6} className="p-2">
                                <Card className="text-center bg-light card-hover" style={{ height: "340px", border: "15px solid rgb(253, 171, 254)", borderRadius: "10px", overflow: "hidden" }}>
                                    <video className="w-100 h-100" autoPlay loop muted playsInline>
                                        <source src={video1} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className="p-2">
                                <Card className="text-center bg-light card-hover" style={{ height: "340px", border: "15px solid rgb(22, 170, 186)", borderRadius: "10px", overflow: "hidden" }}>
                                    <video className="w-100 h-100" autoPlay loop muted playsInline>
                                        <source src={video2} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={4} className="p-2">
                        <Card className="text-center bg-light card-hover" style={{ height: "764px", border: "15px solid rgb(245, 39, 53)", borderRadius: "10px", overflow: "hidden" }}>
                            <video className="w-100 h-100" autoPlay loop muted playsInline>
                                <source src={video3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Card>
                    </Col>
                </Row>

                <Row className="g-0 mt-1">
                    <Col xs={12} md={4} className="p-2">
                        <Card className="text-center bg-light card-hover" style={{ height: "400px", border: "15px solid rgb(188, 255, 4)", borderRadius: "10px", overflow: "hidden" }}>
                            <video className="w-100 h-100" autoPlay loop muted playsInline>
                                <source src={video4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} className="p-2">
                        <Card className="text-center bg-light card-hover" style={{ height: "400px", border: "15px solid rgb(255, 155, 5)", borderRadius: "10px", overflow: "hidden" }}>
                            <video className="w-100 h-100" autoPlay loop muted playsInline>
                                <source src={video5} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Card>
                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <Button variant="dark" style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>
                            View Hundreds of Sites &gt;
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WebsiteGrid;