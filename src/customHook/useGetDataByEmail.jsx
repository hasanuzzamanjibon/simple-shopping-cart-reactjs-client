import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetDataByEmail = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/product?email=${user?.email}`);
      return res.data;
    },
  });
  return [myProducts, refetch];
};

export default useGetDataByEmail;
