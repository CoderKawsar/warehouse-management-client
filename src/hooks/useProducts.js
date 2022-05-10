import { useEffect, useState } from "react";

const useProducts = (numberOfProduct) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (numberOfProduct) {
    url = `https://stackhouse-warehouse.herokuapp.com/inventory?numberOfProduct=${numberOfProduct}`;
  } else url = "https://stackhouse-warehouse.herokuapp.com/inventory";
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
