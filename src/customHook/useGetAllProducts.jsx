import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [countDocuments, setCountDocuments] = useState(0);
  useEffect(() => {
    const loadAllProducts = async () => {
      const res = await axios.get("http://localhost:3001/products");
      setProducts(res.data.result);
      setCountDocuments(res.data.totalProducts);
    };
    loadAllProducts();
  }, []);
  return [products, countDocuments];
};
export default useGetAllProducts;
