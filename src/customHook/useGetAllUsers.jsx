import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [countDocuments, setCountDocuments] = useState(0);
  useEffect(() => {
    const loadAllProducts = async () => {
      const res = await axios.get("http://localhost:3001/users");
      setUsers(res.data.result);
      setCountDocuments(res.data.totalUsers);
    };
    loadAllProducts();
  }, []);
  return [users, countDocuments];
};
export default useGetAllUsers;
