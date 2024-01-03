import { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [countDocuments, setCountDocuments] = useState(0);
  useEffect(() => {
    const loadAllProducts = async () => {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      setProducts(data.result);
      setCountDocuments(data.totalProducts);
    };
    loadAllProducts();
  },[]);
  return [products, countDocuments];
};
export default useGetAllProducts;
