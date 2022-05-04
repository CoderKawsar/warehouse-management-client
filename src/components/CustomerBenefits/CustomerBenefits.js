import React from "react";
import "./CustomerBenefits.css";
import { Col, Row } from "react-bootstrap";
import customerBenefitsImg from "../../img/other-home-img/customer-benefit.jpg";

const CustomerBenefits = () => {
  return (
    <Row md={2} lg={2} className="customer-benefits">
      <Col>
        <h2>
          Customer <span>Benefits</span>
        </h2>
        <p>
          Our objective is to Reduce our clients overall Logistics Cost and
          Increase their Customer Order Servicability
        </p>
        <Row>
          <Col>
            <h4>PROFESSIONAL STAFF</h4>
            <p>Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.</p>
          </Col>
          <Col>
            <h4>DISTRIBUTION & DELIVERY</h4>
            <p>Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>EFFECTIVE USE</h4>
            <p>Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.</p>
          </Col>
          <Col>
            <h4>CONTINOUS FOCUS</h4>
            <p>Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <img src={customerBenefitsImg} alt="" />
      </Col>
    </Row>
  );
};

export default CustomerBenefits;
