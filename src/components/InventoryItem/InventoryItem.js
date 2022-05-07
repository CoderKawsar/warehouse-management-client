import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = ({ product }) => {
  const { _id, name, price, description, img, supplier_name } = product;
  const detailLink = `/inventory/${_id}`;
  return (
    <Col>
      <Card className="inventory-item rounded mb-3">
        <Card.Img height="200px" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name.substring(0, 70)}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <span>Details: </span>
            {description.substring(0, 200)}
            {description.length > 200 && " . . ."}
          </Card.Text>
          <Card.Text>
            <span>Price:</span> ${price}
          </Card.Text>
          <Card.Text>
            <span>Supplier:</span> {supplier_name}
          </Card.Text>
          <Link to={detailLink} className="my-btn">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
