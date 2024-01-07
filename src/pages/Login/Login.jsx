import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import GoogleBtn from "../../componenets/Buttons/GoogleBtn";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";

const Login = () => {
  const [isShow, setShow] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* 
  
  */
  const onSubmit = (data) => {
    handleLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          toast.success("Account Login Successfully!");
        }
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
        // console.log(err.message);
      });
  };

  return (
    <div className="h-screen w-full relative flex justify-center items-center bg-gray-50 px-6">
      <div className="h-screen left-0 top-0 absolute bg-teal-500 w-[30%]"></div>
      <div className="absolute z-50 w-[90%] backdrop-blur-sm">
        <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2   shadow-2xl ">
          <div className="hidden md:block">
            <img src="https://i.postimg.cc/wxngMmyn/login.png" alt="" />
          </div>
          <div className=" w-full flex flex-col items-center gap-2 px-4 py-10">
            <p className="text-xl  lg:text-3xl  font-semibold bg-gradient-to-r from-teal-500 to-sky-500 text-transparent bg-clip-text">
              Fast Cart - Fast Back
            </p>
            <GoogleBtn />
            <div className="divider !text-gray-800">or sign in with email</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex w-full  flex-col gap-2 bg-transparent "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400 "
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <span>This field is required</span>}

              <input
                type={isShow ? "text" : "password"}
                placeholder="Enter your 6 digit password"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && <span>Passowrd Not valid</span>}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent checkbox-xs"
                    id="show_password"
                  />
                  <label
                    onClick={() => setShow(!isShow)}
                    htmlFor="show_password"
                    className="text-sm cursor-pointer
                    "
                  >
                    {isShow ? "Hide Pasword" : "Show Password"}
                  </label>
                </div>
                <div>
                  <button className="btn btn-link">Forget Password ?</button>
                </div>
              </div>
              <input className="btn btn-sm w-full btn-accent" value={"Log-in"} type="submit" />
            </form>
            <div className="divider "></div>
            <p>
              Haven`t any account?{" "}
              <Link to={"/sign-up"} className="underline text-blue-800 cursor-pointer">
                Click Here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
