import React from "react";
import "./StrenthHome.css";
import { Col, Row } from "react-bootstrap";
import srenghtImg from "../../img/other-home-img/our-strength.jpg";

const StrengthHome = () => {
  return (
    <Row md={2} lg={2} className="strength-home">
      <Col>
        <img src={srenghtImg} alt="Strength" />
      </Col>
      <Col>
        <h2>
          Our <span>Strength</span>
        </h2>
        <ul>
          <li>lorem13</li>
          <li>lorem13</li>
          <li>lorem13</li>
          <li>lorem13</li>
          <li>lorem13</li>
        </ul>
      </Col>
    </Row>
  );
};

export default StrengthHome;
