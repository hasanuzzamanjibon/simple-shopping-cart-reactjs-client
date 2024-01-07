import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

const useGetDataByEmail = () => {
  const { user } = useContext(AuthContext);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: async () => {
      //
      const res = await axios.get(`http://localhost:3001/product?email=${user?.email}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("access-token")}` },
      });
      return res.data;
    },
  });
  return [myProducts, refetch];
};

export default useGetDataByEmail;
