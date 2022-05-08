import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const url = `http://localhost:5000/inventory/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url, product]);

  const handleQuantityUpdate = (newQuantity) => {
    const updatedProduct = {
      ...product,
      quantity: newQuantity,
    };

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const restockInput = parseInt(event.target.restock.value);
    const newQuantity = restockInput + product.quantity;
    if (restockInput <= 0) {
      toast("Please enter a valid amount");
      return;
    }

    handleQuantityUpdate(newQuantity);
    event.target.restock.value = "";
    toast(`Restocked ${restockInput} items`);
  };

  const handleDelivered = (event) => {
    event.preventDefault();
    const newQuantity = product.quantity - 1;

    if (newQuantity >= 0) {
      handleQuantityUpdate(newQuantity);
      toast("Delivered");
    } else {
      toast("Not enough item to deliver");
    }
  };

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
              <button className="btn-two" onClick={handleDelivered}>
                Delivered
              </button>
              <form
                className="d-flex align-items-center"
                onSubmit={handleRestock}
              >
                <input
                  type="number"
                  name="restock"
                  className="restock-input"
                  placeholder="No. of items"
                />
                <input type="submit" value="Restock" className="btn-two" />
              </form>
            </div>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              <b>Description: </b>
              {product?.description}
            </p>
            <Link
              to="/manage-inventory"
              className="btn-two manage-inventory-btn"
            >
              Manage Inventories
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InventoryItemDetails;
