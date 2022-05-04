import React from "react";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner";
import CustomerBenefits from "../CustomerBenefits/CustomerBenefits";
import FooterTop from "../FooterTop/FooterTop";
import InventoryItems from "../InventoryItems/InventoryItems";
import StrengthHome from "../StrengthHome/StrengthHome";
import "./Home.css";

const Home = () => {
  const [products] = useProducts(6);
  return (
    <div>
      <Banner></Banner>
      <InventoryItems products={products}></InventoryItems>
      <StrengthHome></StrengthHome>
      <CustomerBenefits></CustomerBenefits>
      <FooterTop></FooterTop>
    </div>
  );
};

export default Home;
