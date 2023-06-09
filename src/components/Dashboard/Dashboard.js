import "./Dashboard.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import logo from "../../Assets/Images/logo1.png";
import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";
import image5 from "../../Assets/Images/image5.jpg";
import image6 from "../../Assets/Images/image6.jpg";
import image7 from "../../Assets/Images/image7.jpg";
import image8 from "../../Assets/Images/image8.jpg";
import image9 from "../../Assets/Images/image9.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <Container className="content-container">
        <Row className="content-row">
          <Col className="content-col">
            <div className="content">
              <h1 className="title">RENDEZVOUS DRUM AND BUGLE CORP.</h1>
              <p className="description">
                Rendezvous DBC is a passionate musical group dedicated to
                creating and performing captivating melodies. With our
                unwavering commitment to the art of music, we have embarked on a
                remarkable journey, crafting unforgettable musical experiences
                that resonate with the soul.
              </p>
              <br />
              <Button variant="primary" className="custom-button">
                Contact Us
              </Button>
            </div>
          </Col>
          <Col className="logo-col">
            <img src={logo} className="logo" />
          </Col>
        </Row>
      </Container>
      <Container className="about-container">
        <Row className="about-row">
          <Col className="about-col">
            <h2>MEET THE AMAZING BAND!</h2>
            <br />
          </Col>
          <Col className="gallery">
            <img src={image1} alt="Image 1" className="gallery-image" />
            <img src={image2} alt="Image 1" className="gallery-image" />
            <img src={image3} alt="Image 1" className="gallery-image" />
            <img src={image4} alt="Image 1" className="gallery-image" />
            <img src={image5} alt="Image 1" className="gallery-image" />
            <img src={image6} alt="Image 1" className="gallery-image" />
            <img src={image7} alt="Image 1" className="gallery-image" />
            <img src={image8} alt="Image 1" className="gallery-image" />
            <img src={image9} alt="Image 1" className="gallery-image" />
          </Col>
        </Row>
      </Container>
      <Container className="services">
        <Row className="about-row">
          <Col className="about-col">
            <h2>WHAT WE OFFFER</h2>
            <br />
            <Col className="service-container">
              <Row className="service-list">
                <h5>FIESTA </h5>
                <h5>DAYANA </h5>
                <h5>PROCESSION </h5>
                <h5>OPENING SALVO </h5>
                <h5>MOTOR CADE</h5>
                <h5>SPORTFEST </h5>
                <h5>FLUVIAL </h5>
                <h5>CARAVAN </h5>
                <h5>FESTIVAL </h5>
              </Row>
            </Col>
          </Col>
          <Col className="offer-content"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
