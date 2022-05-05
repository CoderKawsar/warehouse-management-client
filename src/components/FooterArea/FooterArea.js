import React from "react";
import "./FooterArea.css";
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
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Exercitation Ullamco Laboris
              </p>
              <p>
                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse
                Cillum.
              </p>
            </Col>
            <Col lg={2}>
              <h5 className="footer-title">Quick Link</h5>
              <ul className="footer-link">
                <li>
                  <FontAwesomeIcon icon={faArrowRight} />
                  Home
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} />
                  Inventory
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} />
                  Login
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} />
                  Signup
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="footer-title">Contact Info</h5>
              <div className="location">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  123, Lorem Ipsum, Dummy City, FL-12345 USA
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  123, Lorem Ipsum, Dummy City, FL-12345 USA
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
        &copy; {currentYear} Deposito All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterArea;
