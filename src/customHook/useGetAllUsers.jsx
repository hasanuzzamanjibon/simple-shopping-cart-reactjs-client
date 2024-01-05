import { useEffect, useState } from "react";

const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [countDocuments, setCountDocuments] = useState(0);
  useEffect(() => {
    const loadAllProducts = async () => {
      const res = await fetch("http://localhost:3001/users");
      const data = await res.json();
      setUsers(data.result);
      setCountDocuments(data.totalUsers);
    };
    loadAllProducts();
  }, []);
  return [users, countDocuments];
};
export default useGetAllUsers;
