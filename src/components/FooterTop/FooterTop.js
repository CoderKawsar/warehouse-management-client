import React from "react";
import { Col, Row } from "react-bootstrap";
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

const FooterTop = () => {
  return (
    <div className="footerTop">
      <Row>
        <Col>
          <h5 className="footer-title">About</h5>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Exercitation Ullamco Laboris
          </p>
          <p>
            Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse
            Cillum.
          </p>
        </Col>
        <Col>
          <h5 className="footer-title">Quick Link</h5>
          <ul>
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
        <Col>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            123, Lorem Ipsum, Dummy City, FL-12345 USA
            <br />
            <FontAwesomeIcon icon={faPhone} />
            123, Lorem Ipsum, Dummy City, FL-12345 USA
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
            info@Warehouse.com | support@Warehouse.com
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </Col>
        <Col>
          <h5 className="footer-title">Subscribe</h5>
          <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
          <form>
            <input type="email" name="email" />
            <input type="submit" value="Get Notified" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default FooterTop;
