import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = ({ product }) => {
  const { _id, name, price, description, img, supplier_name } = product;
  const detailLink = `/inventory/${_id}`;
  return (
    <Col>
      <Card className="inventory-item">
        <Card.Img height="200px" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Supplier: {supplier_name}</Card.Text>
          <Link to={detailLink}>Details</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
