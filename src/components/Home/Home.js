import React from "react";
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
      <h2 className="section-title">Inventory</h2>
      <InventoryItems products={products}></InventoryItems>
      <StrengthHome></StrengthHome>
      <CustomerBenefits></CustomerBenefits>
    </div>
  );
};

export default Home;
