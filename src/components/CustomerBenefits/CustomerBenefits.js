import React from "react";
import "./CustomerBenefits.css";
import { Col, Row } from "react-bootstrap";
import customerBenefitsImg from "../../img/other-home-img/customer-benefit.jpg";

const CustomerBenefits = () => {
  return (
    <Row className="customer-benefits align-items-center">
      <Col
        xs={{ span: 12, order: 2 }}
        md={{ span: 6, order: 1 }}
        lg={{ span: 6, order: 1 }}
      >
        <div className="customer-benefits-left">
          <h2 className="section-title">
            Customer <span>Benefits</span>
          </h2>
          <p className="mt-3 mb-5">
            Our objective is to Reduce our clients overall Logistics Cost and
            Increase their Customer Order Servicability
          </p>
          <Row>
            <Col lg={6}>
              <h4>PROFESSIONAL STAFF</h4>
              <p>Professional staff from all over the world.</p>
            </Col>
            <Col lg={6}>
              <h4>DISTRIBUTION & DELIVERY</h4>
              <p>Best distribution and delivery system available</p>
            </Col>
            <Col lg={6} className="mt-3">
              <h4>EFFECTIVE USE</h4>
              <p>Effective usage of our highest capability</p>
            </Col>
            <Col lg={6} className="mt-3">
              <h4>CONTINOUS FOCUS</h4>
              <p>Continuous focus on safety of your goods.</p>
            </Col>
          </Row>
        </div>
      </Col>
      <Col
        xs={{ span: 12, order: 1 }}
        md={{ span: 6, order: 2 }}
        lg={{ span: 6, order: 2 }}
        className="p-0"
      >
        <img src={customerBenefitsImg} alt="" />
      </Col>
    </Row>
  );
};

export default CustomerBenefits;
