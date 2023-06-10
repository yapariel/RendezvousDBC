import "./Dashboard.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import ParticlesBg from "particles-bg";
import MessengerCustomerChat from "react-messenger-customer-chat";
import logo from "../../Assets/Images/logo1.png";
import logo1 from "../../Assets/Images/logo1.png";
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
  const handleFacebookButtonClick = () => {
    window.open("https://www.facebook.com/Rendezvous2008", "_blank");
  };

  return (
    <div className="dashboard-page">
      <MessengerCustomerChat
        pageId="1235305326607708"
        appId="1690004001449085"
        themeColor="#0084FF"
      />
      <Navbar />
      <Container id="home" className="home"></Container>
      <Container id="content-container" className="content-container">
        <Row className="content-row">
          <Col xs={12} md={6} className="content-col">
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
              <Button
                variant="primary"
                className="custom-button"
                onClick={handleFacebookButtonClick}
              >
                Facebook
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="logo-col">
            <img src={logo} className="logo" />
          </Col>
        </Row>
      </Container>
      <Container id="about-container" className="about-container">
        <Row className="about-row">
          <Col className="about-col">
            <h2>MEET THE AMAZING BAND!</h2>
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
      <Container id="services" className="services">
        <Row className="about-row">
          <Col className="about-col">
            <h2>WHAT WE OFFER</h2>
            <Col className="service-container green-rectangle">
              <Row className="service-list justify-content-center">
                <h5 className="text-center shadow service-bg">FIESTA</h5>
                <h5 className="text-center shadow service-bg">DAYANA</h5>
                <h5 className="text-center shadow service-bg">PROCESSION</h5>
                <h5 className="text-center shadow service-bg">OPENING SALVO</h5>
                <h5 className="text-center shadow service-bg">MOTOR CADE</h5>
                <h5 className="text-center shadow service-bg">SPORT FEST</h5>
                <h5 className="text-center shadow service-bg">FLUVIAL</h5>
                <h5 className="text-center shadow service-bg">CARAVAN</h5>
                <h5 className="text-center shadow service-bg">FESTIVAL</h5>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container">
        <Row className="contact-row">
          <Col className="contact-col">
            <div className="contact">
              <h1 className="contact-title">CONTACT US!</h1>
              <h3 className="contact-description">
                If you're interested in joining our team or booking a
                performance, we're here to assist you.
              </h3>
              <h2 className="contact-description">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span> </span>
                Sitio Tunob Lapok, Barangay Inayawan, Cebu City, Philippines,
                6000
              </h2>
              <h2 className="contact-description">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span> </span>
                +639223432722 +639456155950
              </h2>
              <h2 className="contact-description">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <span> </span>
                Rendezvous Drum and Bugle Corps
              </h2>
            </div>
          </Col>
          <Col xs={12} md={6} className="contact-logo">
            <img src={logo1} className="logo1" />
          </Col>
        </Row>
      </Container>
      {/* <Container id="footer" className="footer">
        <Row>
          <Col className="mana">MUSIC IS A MISSION NOT A COMPETITION</Col>
        </Row>
      </Container> */}
      {/* <ParticlesBg type="cobweb" bg={true} color="#808080" num={30} /> */}
    </div>
  );
};

export default Dashboard;
