import React from "react";
import "./StrenthHome.css";
import { Col, Row } from "react-bootstrap";
import srenghtImg from "../../img/other-home-img/our-strength.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StrengthHome = () => {
  return (
    <Row md={2} lg={2} className="strength-home align-items-center">
      <Col>
        <img src={srenghtImg} alt="Strength" />
      </Col>
      <Col>
        <div className="right-strength">
          <h2 className="section-title">
            Our <span>Strength</span>
          </h2>
          <p className="mt-3">
            Our objective is to Reduce our clients overall Logistics Cost and
            Increase their Customer Order Servicability
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              lorem13
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              lorem13
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              lorem13
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              lorem13
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              lorem13
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default StrengthHome;
