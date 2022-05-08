import { useEffect, useState } from "react";

const useProducts = (numberOfProduct) => {
  const [products, setProducts] = useState([]);
  let url;
  if (numberOfProduct) {
    url = `http://localhost:5000/inventory?numberOfProduct=${numberOfProduct}`;
  } else url = "http://localhost:5000/inventory";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);
  return [products, setProducts];
};

export default useProducts;
