import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const { handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success("Google Login Successfully!");
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <button onClick={googleLoginHandler} className="bg-teal-500 text-white btn btn-sm ">
      <FaGoogle />
      Sign in with google
    </button>
  );
};

export default GoogleBtn;
