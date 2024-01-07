import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxiosSecure = () => {
  const { handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:3001",
  });
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await handleSignOut();
          navigate("/log-in");
        }
        return Promise.all(error);
      }
    );
  }, [handleSignOut, navigate, axiosSecure]);
  return [axiosSecure];
};

export default useAxiosSecure;
