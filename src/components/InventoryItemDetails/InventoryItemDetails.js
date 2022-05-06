import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const url = `http://localhost:5000/inventory/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);

  return (
    <div className="inventory-item-details">
      <div className="d-flex justify-content-center">
        <h2 className="center-title mt-3 mb-5">Product Details</h2>
      </div>
      <Container>
        <Row>
          <Col className="prod-img-container d-flex justify-content-center align-items-center">
            <img src={product?.img} alt="Product" />
          </Col>
          <Col className="ps-5">
            <h4 className="mb-4">{product?.name}</h4>
            <p>
              <b>Supplier: </b>
              {product?.supplier_name}
            </p>
            <p>
              <b>Price: </b>
              {product?.price}
            </p>
            <p>
              <b>Quantity: </b>
              {product?.quantity}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn-two">Delivered</button>
              <form className="d-flex align-items-center">
                <input
                  type="number"
                  name="restock"
                  className="restock-input"
                  placeholder="No. of items"
                />
                <input type="submit" value="Restock" className="btn-two" />
              </form>
            </div>
            <p className="mt-3">
              <b>Description: </b>
              {product?.description}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InventoryItemDetails;
