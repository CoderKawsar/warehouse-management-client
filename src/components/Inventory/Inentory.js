import React from "react";
import useProducts from "../../hooks/useProducts";
import InventoryItems from "../InventoryItems/InventoryItems";

const Inentory = () => {
  const [products] = useProducts();
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="center-title">Inventory</h2>
      </div>
      <InventoryItems products={products} />
    </div>
  );
};

export default Inentory;
