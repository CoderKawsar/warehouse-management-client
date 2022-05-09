import React from "react";
import "./StrenthHome.css";
import { Col, Row } from "react-bootstrap";
import srenghtImg from "../../img/other-home-img/our-strength.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StrengthHome = () => {
  return (
    <Row className="strength-home align-items-center">
      <Col
        xs={{ span: 12, order: "first" }}
        md={{ span: 6, order: "first" }}
        lg={{ span: 6, order: "first" }}
      >
        <img src={srenghtImg} alt="Strength" />
      </Col>
      <Col
        xs={{ span: 12, order: "last" }}
        md={{ span: 6, order: "last" }}
        lg={{ span: 6, order: "last" }}
        className="p-0"
      >
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
              Teamwork
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Computer Literacy and Technology Skills
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Problem-solving Skills
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Flexibility
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Punctuality
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Integrity
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default StrengthHome;
