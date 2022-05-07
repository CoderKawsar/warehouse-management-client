import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner";
import CustomerBenefits from "../CustomerBenefits/CustomerBenefits";
import InventoryItems from "../InventoryItems/InventoryItems";
import StrengthHome from "../StrengthHome/StrengthHome";
import "./Home.css";

const Home = () => {
  const [products] = useProducts(6);
  return (
    <div>
      <Banner></Banner>
      <div className="home-inventory-section">
        <div className="d-flex justify-content-center">
          <h2 className="center-title">Inventory</h2>
        </div>
        <InventoryItems products={products}></InventoryItems>
        <div className="d-flex justify-content-center">
          <Link to="/manage-inventory" className="btn-two manage-inventory-btn">
            Manage Inventories
          </Link>
        </div>
      </div>
      <StrengthHome></StrengthHome>
      <CustomerBenefits></CustomerBenefits>
    </div>
  );
};

export default Home;
