import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import "./AddInventoryItem.css";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddInventoryItem = () => {
  const [user] = useAuthState(auth);
  let productName = useRef("");
  let productPrice = useRef("");
  let productQuantity = useRef("");
  let productSupplier = useRef("");
  let productDescription = useRef("");
  let productImgUrl = useRef("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    productName = productName.current.value;
    productPrice = productPrice.current.value;
    productQuantity = productQuantity.current.value;
    productSupplier = productSupplier.current.value;
    productDescription = productDescription.current.value;
    productImgUrl = productImgUrl.current.value;
    const newProduct = {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      supplier_name: productSupplier,
      description: productDescription,
      img: productImgUrl,
      adderEmail: user.email,
    };
    fetch("https://stack0house-warehouse.herokuapp.com/inventory", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast(`${newProduct.name} inserted`);
        e.target.reset();
      });
  };
  return (
    <div className="add-to-inventory">
      <div className="d-flex justify-content-center">
        <h2 className="center-title">Add Inventory Item</h2>
      </div>
      <Form className="mx-auto" onSubmit={handleAddProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Porduct Name</b>
          </Form.Label>
          <Form.Control type="text" ref={productName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>Price</b>
          </Form.Label>
          <Form.Control type="number" ref={productPrice} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>
            <b>Quantity</b>
          </Form.Label>
          <Form.Control type="number" ref={productQuantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Label>
            <b>Supplier Name</b>
          </Form.Label>
          <Form.Control type="text" ref={productSupplier} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>
            <b>Product Description</b>
          </Form.Label>
          <Form.Control as="textarea" rows={3} ref={productDescription} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>
            <b>Product Image URL</b>
          </Form.Label>
          <Form.Control ref={productImgUrl} />
        </Form.Group>
        <button className="btn-two">Add to inventory</button>
      </Form>
    </div>
  );
};

export default AddInventoryItem;
