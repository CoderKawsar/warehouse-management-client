import { useEffect, useState } from "react";

const useProducts = (numberOfProduct) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (numberOfProduct) {
    url = `https://warehouse-management-1d7s.onrender.com/inventory?numberOfProduct=${numberOfProduct}`;
  } else url = "https://warehouse-management-1d7s.onrender.com/inventory";
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
