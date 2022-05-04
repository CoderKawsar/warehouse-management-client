import React from "react";
import useProducts from "../../hooks/useProducts";
import InventoryItems from "../InventoryItems/InventoryItems";

const Inentory = () => {
  const [products] = useProducts();
  return (
    <div>
      <InventoryItems products={products} />
    </div>
  );
};

export default Inentory;
