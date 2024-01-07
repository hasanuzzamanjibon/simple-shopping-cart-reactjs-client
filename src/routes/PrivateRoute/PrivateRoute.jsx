import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../componenets/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/log-in" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
