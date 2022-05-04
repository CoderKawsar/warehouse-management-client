import React from "react";
import { Container, Row } from "react-bootstrap";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = ({ products }) => {
  return (
    <Container className="mt-5">
      <Row xs={1} sm={2} md={3} lg={3}>
        {products.map((product) => (
          <InventoryItem key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default InventoryItems;
