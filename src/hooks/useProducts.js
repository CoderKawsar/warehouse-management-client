import { useEffect, useState } from "react";

const useProducts = (numberOfProduct) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (numberOfProduct) {
    url = `http://localhost:5000/inventory?numberOfProduct=${numberOfProduct}`;
  } else url = "http://localhost:5000/inventory";
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [url]);
  return [products, isLoading, setProducts];
};

export default useProducts;
