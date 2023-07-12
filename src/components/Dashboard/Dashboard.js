import "./Dashboard.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import MessengerCustomerChat from "react-messenger-customer-chat";
import rendezvouslogo from "../../Assets/Images/rendezvous-logo.png";
import rendezvouslogo1 from "../../Assets/Images/rendezvous-logo-1.png";
import rendezvous2 from "../../Assets/Images/rendezvous-dbc-member-2.jpg";
import rendezvous3 from "../../Assets/Images/rendezvous-dbc-member-3.jpg";
import rendezvous4 from "../../Assets/Images/rendezvous-dbc-member-4.jpg";
import rendezvous5 from "../../Assets/Images/rendezvous-dbc-member-6.jpg";
import rendezvous6 from "../../Assets/Images/rendezvous-dbc-member-6.jpg";
import rendezvous7 from "../../Assets/Images/rendezvous-dbc-member-7.jpg";
import rendezvous77 from "../../Assets/Images/rendezvous-dbc-member-7-1.jpg";
import rendezvous8 from "../../Assets/Images/rendezvous-dbc-member-8.jpg";
import rendezvous9 from "../../Assets/Images/rendezvous-dbc-member-9.jpg";
import rendezvous10 from "../../Assets/Images/rendezvous-dbc-member-10.jpg";
import rendezvous11 from "../../Assets/Images/rendezvous-dbc-member-11.jpg";
import rendezvous12 from "../../Assets/Images/rendezvous-dbc-member-12.jpg";
import rendezvous13 from "../../Assets/Images/rendezvous-dbc-member-13.jpg";
import rendezvous14 from "../../Assets/Images/rendezvous-dbc-member-14.jpg";
import rendezvous15 from "../../Assets/Images/rendezvous-dbc-member-15.jpg";
import rendezvous16 from "../../Assets/Images/rendezvous-dbc-member-16.jpg";
import rendezvous161 from "../../Assets/Images/rendezvous-dbc-member-161.jpg";
import rendezvous17 from "../../Assets/Images/rendezvous-dbc-member-17.jpg";
import rendezvous18 from "../../Assets/Images/rendezvous-dbc-member-18.jpg";
import rendezvous19 from "../../Assets/Images/rendezvous-dbc-member-19.jpg";
import rendezvous20 from "../../Assets/Images/rendezvous-dbc-member-20.jpg";
import rendezvous21 from "../../Assets/Images/rendezvous-dbc-member-21.jpg";
import rendezvous22 from "../../Assets/Images/rendezvous-dbc-member-22.jpg";
import rendezvous23 from "../../Assets/Images/rendezvous-dbc-member-23.jpg";
import rendezvous24 from "../../Assets/Images/rendezvous-dbc-member-24.jpg";
import rendezvous25 from "../../Assets/Images/rendezvous-dbc-member-25.jpg";
import rendezvous26 from "../../Assets/Images/rendezvous-dbc-member-26.jpg";
import rendezvous27 from "../../Assets/Images/rendezvous-dbc-member-27.jpg";
import rendezvous28 from "../../Assets/Images/rendezvous-dbc-member-28.jpg";
import rendezvous29 from "../../Assets/Images/rendezvous-dbc-member-29.jpg";
import rendezvous30 from "../../Assets/Images/rendezvous-dbc-member-30.jpg";
import rendezvous31 from "../../Assets/Images/rendezvous-dbc-member-31.jpg";
import rendezvous32 from "../../Assets/Images/rendezvous-dbc-member-32.jpg";

const Dashboard = () => {
  const handleFacebookButtonClick = () => {
    window.open("https://www.facebook.com/Rendezvous2008", "_blank");
  };

  return (
    <Container className="dashboard-page">
      <MessengerCustomerChat
        pageId="1235305326607708"
        appId="1690004001449085"
        themeColor="#0084FF"
      />
      <Navbar />
      <Container id="home" className="content-container">
        <Row className="content-row">
          <Col xs={12} md={6} className="content-col">
            <Col className="content">
              <h1 className="title">RENDEZVOUS DRUM AND BUGLE CORP.</h1>
              <h2 className="description">
                Rendezvous Drum and Bugle Corps, Cebu City, Philippines. is a
                passionate musical group dedicated to creating and performing
                captivating melodies. With our unwavering commitment to the art
                of music, we have embarked on a remarkable journey, crafting
                unforgettable musical experiences that resonate with the soul.
              </h2>
              <br />
              <Button
                variant="primary"
                className="custom-button"
                onClick={handleFacebookButtonClick}
              >
                Facebook
              </Button>
            </Col>
          </Col>
          <Col xs={12} md={6} className="logo-col">
            <img
              src={rendezvouslogo}
              className="logo"
              alt="Drum and Bugle Corps Cebu City, Philippines."
            />
          </Col>
        </Row>
      </Container>
      <Container id="about-container" className="about-container">
        <Row className="about-row">
          <h2 className="about-rende">ABOUT RENDEZVOUS</h2>
          <h2 className="about-description">
            We started in 2008 as a drum and bugle corps from the lovely city of
            Cebu, Philippines. We love music and have been making amazing tunes
            and performances ever since. With a history of more than ten years,
            Rendezvous keeps pushing for great music, impressing audiences with
            our talent and hard work.
          </h2>

          <Col className="gallery">
            <Col className="about-col">
              <h2>MEET THE AMAZING BAND!</h2>
            </Col>
            <Col className="images" xs={6} md={4}>
              <img
                src={rendezvous2}
                alt="Rendezvous Drum and Bugle Corps member 1"
                className="gallery-image"
              />
              <img
                src={rendezvous3}
                alt="Rendezvous Drum and Bugle Corps member 2"
                className="gallery-image"
              />
              <img
                src={rendezvous4}
                alt="Rendezvous Drum and Bugle Corps member 3"
                className="gallery-image"
              />
              <img
                src={rendezvous5}
                alt="Rendezvous Drum and Bugle Corps member 4"
                className="gallery-image"
              />
              <img
                src={rendezvous6}
                alt="Rendezvous Drum and Bugle Corps member 5"
                className="gallery-image"
              />
              <img
                src={rendezvous7}
                alt="Rendezvous Drum and Bugle Corps member 6"
                className="gallery-image"
              />
              <img
                src={rendezvous77}
                alt="Rendezvous Drum and Bugle Corps member 1"
                className="gallery-image"
              />
              <img
                src={rendezvous8}
                alt="Rendezvous Drum and Bugle Corps member 7"
                className="gallery-image"
              />
              <img
                src={rendezvous9}
                alt="Rendezvous Drum and Bugle Corps member 8"
                className="gallery-image"
              />
              <img
                src={rendezvous10}
                alt="Rendezvous Drum and Bugle Corps member 9"
                className="gallery-image"
              />
              <img
                src={rendezvous11}
                alt="Rendezvous Drum and Bugle Corps member 10"
                className="gallery-image"
              />
              <img
                src={rendezvous12}
                alt="Rendezvous Drum and Bugle Corps member 11"
                className="gallery-image"
              />
              <img
                src={rendezvous13}
                alt="Rendezvous Drum and Bugle Corps member 12"
                className="gallery-image"
              />
              <img
                src={rendezvous14}
                alt="Rendezvous Drum and Bugle Corps member 13"
                className="gallery-image"
              />
              <img
                src={rendezvous15}
                alt="Rendezvous Drum and Bugle Corps member 14"
                className="gallery-image"
              />
              <img
                src={rendezvous16}
                alt="Rendezvous Drum and Bugle Corps member 15"
                className="gallery-image"
              />
              <img
                src={rendezvous161}
                alt="Rendezvous Drum and Bugle Corps member 16"
                className="gallery-image"
              />
              <img
                src={rendezvous17}
                alt="Rendezvous Drum and Bugle Corps member 17"
                className="gallery-image"
              />
              <img
                src={rendezvous18}
                alt="Rendezvous Drum and Bugle Corps member 18"
                className="gallery-image"
              />
              <img
                src={rendezvous19}
                alt="Rendezvous Drum and Bugle Corps member 19"
                className="gallery-image"
              />
              <img
                src={rendezvous20}
                alt="Rendezvous Drum and Bugle Corps member 20"
                className="gallery-image"
              />
              <img
                src={rendezvous21}
                alt="Rendezvous Drum and Bugle Corps member 21"
                className="gallery-image"
              />
              <img
                src={rendezvous22}
                alt="Rendezvous Drum and Bugle Corps member 22"
                className="gallery-image"
              />
              <img
                src={rendezvous23}
                alt="Rendezvous Drum and Bugle Corps member 23"
                className="gallery-image"
              />
              <img
                src={rendezvous24}
                alt="Rendezvous Drum and Bugle Corps member 24"
                className="gallery-image"
              />
              <img
                src={rendezvous25}
                alt="Rendezvous Drum and Bugle Corps member 25"
                className="gallery-image"
              />
              <img
                src={rendezvous26}
                alt="Rendezvous Drum and Bugle Corps member 26"
                className="gallery-image"
              />
              <img
                src={rendezvous27}
                alt="Rendezvous Drum and Bugle Corps member 27"
                className="gallery-image"
              />
              <img
                src={rendezvous28}
                alt="Rendezvous Drum and Bugle Corps member 28"
                className="gallery-image"
              />
              <img
                src={rendezvous29}
                alt="Rendezvous Drum and Bugle Corps member 29"
                className="gallery-image"
              />
              <img
                src={rendezvous30}
                alt="Rendezvous Drum and Bugle Corps member 30"
                className="gallery-image"
              />
              <img
                src={rendezvous31}
                alt="Rendezvous Drum and Bugle Corps member 31"
                className="gallery-image"
              />
              <img
                src={rendezvous32}
                alt="Rendezvous Drum and Bugle Corps member 32"
                className="gallery-image"
              />
            </Col>
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
            <Col className="contact">
              <h1 className="contact-title">CONTACT US!</h1>
              <h3 className="contact-description">
                If you're interested in joining our team or booking a
                performance, we're here to assist you.
              </h3>
              <h2 id="contact-description" className="contact-description">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span> </span>
                Sitio Tunob Lapok, Barangay Inayawan, Cebu City, 6000,
                Philippines.
              </h2>
              <h2 className="contact-description">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span> </span>
                09223432722 09456155950
              </h2>
              <h2 className="contact-description">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <span> </span>
                Rendezvous Drum and Bugle Corps
              </h2>
            </Col>
          </Col>
          <Col xs={12} md={6} className="contact-logo">
            <img src={rendezvouslogo1} className="logo1" alt="rendezvous dbc" />
          </Col>
        </Row>
      </Container>
      <Row className="footer-container">
        <span className="foot-title">MUSIC IS A MISSION NOT A COMPETITION</span>
      </Row>
    </Container>
  );
};

export default Dashboard;
