import React from "react";
import useProducts from "../../hooks/useProducts";
import InventoryItems from "../InventoryItems/InventoryItems";
import Spinner from "../Spinner/Spinner";

const Inentory = () => {
  const [products, isLoading] = useProducts();
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="center-title">Inventory</h2>
      </div>
      {isLoading && <Spinner />}
      <InventoryItems products={products} />
    </div>
  );
};

export default Inentory;
