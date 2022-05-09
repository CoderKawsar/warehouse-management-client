import React from "react";
import { Accordion, Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import "./ManageInventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const ManageInventory = () => {
  const [products, isLoading, setProducts] = useProducts();
  let i = 1;

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
        <h2 className="center-title">Manage Inventory</h2>
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
          {isLoading && (
            <tr>
              <td colSpan={7}>
                <Spinner />
              </td>
            </tr>
          )}
          {products.map((product) => (
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

export default ManageInventory;
