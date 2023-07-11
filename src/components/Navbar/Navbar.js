import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import rendezvouslogo from "../../Assets/Images/rendezvous-logo.png";
import { Col } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img
                src={rendezvouslogo}
                className="nav_logo-img"
                alt="rendezvous dbc - Drum and Bugle Corps Cebu City"
              />
              <Col className="nav-title">RENDEZVOUS DBC</Col>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  // to="/"
                  className="nav-links"
                  onClick={() => scrollToSection("home")}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  // to="/about"
                  className="nav-links"
                  onClick={() => scrollToSection("about-container")}
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  // to="/services"
                  className="nav-links"
                  onClick={() => scrollToSection("services")}
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  // to="/contact"
                  className="nav-links"
                  onClick={() => scrollToSection("contact-description")}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
