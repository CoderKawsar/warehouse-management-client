import React, { useState, useEffect } from "react";
import { Accordion, Spinner, Table } from "react-bootstrap";
import "./MyInventoryItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyInventoryItems = () => {
  const [products, setProducts] = useState();
  const [user, loading, error] = useAuthState(auth);
  let i = 1;

  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/myinventory?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    if (window.confirm("Do you really want to Delete?")) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    } else {
      return;
    }
  };
  return (
    <div className="manage-inventory-page">
      <div className="d-flex justify-content-center mb-4">
        <h2 className="center-title">My Inventory Items</h2>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Link to="/add-inventory-item" className="btn-two">
          Add Inventory Item
        </Link>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product._id}>
                <td className="text-center">{i++}</td>
                <td>{product?.name}</td>
                <td>{product?.supplier_name}</td>
                <td>$ {product?.price}</td>
                <td>$ {product?.quantity}</td>
                <td>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Click to see description
                      </Accordion.Header>
                      <Accordion.Body>{product?.description}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="delete-font"
                    onClick={() => handleDelete(product._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyInventoryItems;
