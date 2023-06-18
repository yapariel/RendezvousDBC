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
// import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";
import image5 from "../../Assets/Images/image5.jpg";
import image6 from "../../Assets/Images/image6.jpg";
import image7 from "../../Assets/Images/image7.jpg";
import image77 from "../../Assets/Images/image7-1.jpg";
import image8 from "../../Assets/Images/image8.jpg";
import image9 from "../../Assets/Images/image9.jpg";
import image10 from "../../Assets/Images/image10.jpg";
import image11 from "../../Assets/Images/image11.jpg";
import image12 from "../../Assets/Images/image12.jpg";
import image13 from "../../Assets/Images/image13.jpg";
import image14 from "../../Assets/Images/image14.jpg";
import image15 from "../../Assets/Images/image15.jpg";
import image16 from "../../Assets/Images/image16.jpg";
import image161 from "../../Assets/Images/image161.jpg";
import image17 from "../../Assets/Images/image17.jpg";
import image18 from "../../Assets/Images/image18.jpg";
import image19 from "../../Assets/Images/image19.jpg";
import image20 from "../../Assets/Images/image20.jpg";
import image21 from "../../Assets/Images/image21.jpg";
import image22 from "../../Assets/Images/image22.jpg";
import image23 from "../../Assets/Images/image23.jpg";
import image24 from "../../Assets/Images/image24.jpg";
import image25 from "../../Assets/Images/image25.jpg";
import image26 from "../../Assets/Images/image26.jpg";
import image27 from "../../Assets/Images/image27.jpg";
import image28 from "../../Assets/Images/image28.jpg";
import image29 from "../../Assets/Images/image29.jpg";
import image30 from "../../Assets/Images/image30.jpg";
import image31 from "../../Assets/Images/image31.jpg";
import image32 from "../../Assets/Images/image32.jpg";

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
      <Container id="home" className="content-container">
        <Row className="content-row">
          <Col xs={12} md={6} className="content-col">
            <div className="content">
              <h1 className="title">RENDEZVOUS DRUM AND BUGLE CORP.</h1>
              <p className="description">
                Rendezvous Drum and Bugle Corps is a passionate musical group
                dedicated to creating and performing captivating melodies. With
                our unwavering commitment to the art of music, we have embarked
                on a remarkable journey, crafting unforgettable musical
                experiences that resonate with the soul.
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
          <h2 className="about-rende">ABOUT RENDEZVOUS</h2>
          <p className="about-description">
            We started in 2008 as a drum and bugle corps from the lovely city of
            Cebu, Philippines. We love music and have been making amazing tunes
            and performances ever since. With a history of more than ten years,
            Rendezvous keeps pushing for great music, impressing audiences with
            our talent and hard work.
          </p>
          <Col className="gallery">
            <Col className="about-col">
              <h2>MEET THE AMAZING BAND!</h2>
            </Col>
            <Col className="images" xs={6} md={4}>
              <img src={image2} alt="Image 1" className="gallery-image" />
              <img src={image3} alt="Image 1" className="gallery-image" />
              <img src={image4} alt="Image 1" className="gallery-image" />
              <img src={image5} alt="Image 1" className="gallery-image" />
              <img src={image6} alt="Image 1" className="gallery-image" />
              <img src={image7} alt="Image 1" className="gallery-image" />
              <img src={image77} alt="Image 1" className="gallery-image" />
              <img src={image8} alt="Image 1" className="gallery-image" />
              <img src={image9} alt="Image 1" className="gallery-image" />
              <img src={image10} alt="Image 1" className="gallery-image" />
              <img src={image11} alt="Image 1" className="gallery-image" />
              <img src={image12} alt="Image 1" className="gallery-image" />
              <img src={image13} alt="Image 1" className="gallery-image" />
              <img src={image14} alt="Image 1" className="gallery-image" />
              <img src={image15} alt="Image 1" className="gallery-image" />
              <img src={image16} alt="Image 1" className="gallery-image" />
              <img src={image161} alt="Image 1" className="gallery-image" />
              <img src={image17} alt="Image 1" className="gallery-image" />
              <img src={image18} alt="Image 1" className="gallery-image" />
              <img src={image19} alt="Image 1" className="gallery-image" />
              <img src={image20} alt="Image 1" className="gallery-image" />
              <img src={image21} alt="Image 1" className="gallery-image" />
              <img src={image22} alt="Image 1" className="gallery-image" />
              <img src={image23} alt="Image 1" className="gallery-image" />
              <img src={image24} alt="Image 1" className="gallery-image" />
              <img src={image25} alt="Image 1" className="gallery-image" />
              <img src={image26} alt="Image 1" className="gallery-image" />
              <img src={image27} alt="Image 1" className="gallery-image" />
              <img src={image28} alt="Image 1" className="gallery-image" />
              <img src={image29} alt="Image 1" className="gallery-image" />
              <img src={image30} alt="Image 1" className="gallery-image" />
              <img src={image31} alt="Image 1" className="gallery-image" />
              <img src={image32} alt="Image 1" className="gallery-image" />
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
            <div className="contact">
              <h1 className="contact-title">CONTACT US!</h1>
              <h3 className="contact-description">
                If you're interested in joining our team or booking a
                performance, we're here to assist you.
              </h3>
              <h2 id="contact-description" className="contact-description">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span> </span>
                Sitio Tunob Lapok, Barangay Inayawan, Cebu City, Philippines,
                6000
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
            </div>
          </Col>
          <Col xs={12} md={6} className="contact-logo">
            <img src={logo1} className="logo1" />
          </Col>
        </Row>
      </Container>
      <Row className="footer-container">
        <span className="foot-title">MUSIC IS A MISSION NOT A COMPETITION</span>
      </Row>
    </div>
  );
};

export default Dashboard;
