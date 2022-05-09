import React from "react";
import "./FooterArea.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FooterArea = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className="footer-title">About</h5>
              <p>
                Best warehouse management system available all over the world.
              </p>
              <p>You will get best safety of your goods and best goods.</p>
            </Col>
            <Col lg={2} className="ps-4">
              <h5 className="footer-title">Quick Link</h5>
              <ul className="footer-link">
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/inventory">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Signup
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="footer-title">Contact Info</h5>
              <div className="location">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  123, Andorkilla, Bandarban FL-12345
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  123, Ali kodom, Bandarban FL-12345
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@Warehouse.com | support@Warehouse.com
                </p>
              </div>
              <div className="social-icons d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center facebook-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="d-flex align-items-center justify-content-center twitter-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="d-flex align-items-center justify-content-center linkedin-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className="d-flex align-items-center justify-content-center github-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <h5 className="footer-title">Subscribe</h5>
              <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
              <form className="footer-form">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                />
                <input className="my-btn" type="submit" value="Get Notified" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        &copy; {currentYear} Stackhouse All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterArea;
