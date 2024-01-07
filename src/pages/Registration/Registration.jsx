import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoogleBtn from "../../componenets/Buttons/GoogleBtn";
import axios from "axios";

const Registration = () => {
  const { handleEmailSIgnup, handleSignOut, handleUpdateProfile } = useContext(AuthContext);
  const [isShow, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const imageToken = import.meta.env.VITE_photoUrl;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* 
  
  */
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgUrl = result.data.display_url;
          const { email, role, name, password } = data;
          const newUser = { email, role, name, image: imgUrl };
          handleEmailSIgnup(email, password)
            .then((result) => {
              const LoggedInUser = result.user;
              setErrorMessage("  ");
              handleUpdateProfile(LoggedInUser, name, imgUrl)
                .then(() => {
                  axios.post("http://localhost:3001/addUser", newUser).then((result) => {
                    if (result.data.acknowledged) {
                      toast.success("Account Created Successfully! Please, Login Now");
                    }
                  });
                })
                .catch((error) => {
                  console.error(error.message);
                });
            })
            .then(() => {
              handleSignOut();
            })
            .then(() => {
              navigate("/log-in");
            })
            .catch((error) => {
              setErrorMessage(error.code);
            });
        }
      });
  };

  //   const updateProfie = (loggedUser, name, imgUrl) => {
  //     handleUpdateProfile
  //   };
  return (
    <div className="h-screen w-full relative flex justify-center items-center bg-gray-50 px-6">
      <div className="h-screen left-0 top-0 absolute bg-teal-500 w-[30%]"></div>
      <div className="absolute z-50 w-[90%] backdrop-blur-sm">
        <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2   shadow-2xl ">
          <div className="hidden md:block">
            <img src="https://i.postimg.cc/bJ2wqPY7/signup.png" alt="" />
          </div>
          <div className=" w-full flex flex-col items-center gap-2 px-4 py-10">
            <h2 className="text-2xl font-bold">Welcome.</h2>
            <GoogleBtn />
            <div className="divider !text-gray-800">or sign up with email</div>
            {errorMessage && (
              <div role="alert" className="alert alert-error !py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}
            {/* {errorMessage && <span className="text-error">{errorMessage}</span>} */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex w-full  flex-col gap-2 bg-transparent "
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                placeholder="Enter your name"
                {...register("name", {
                  required: "email field must be required",
                  maxLength: 20,
                  minLength: 6,
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-error">
                  {errors.name.message}
                </p>
              )}
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400 "
                {...register("email", { required: "email field must be required" })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-error">
                  {errors.email.message}
                </p>
              )}
              <input
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400 "
                {...register("image", {
                  required: "picture field must be required",
                })}
                type="file"
                id="picture"
                aria-invalid={errors.image ? "true" : "false"}
              />
              {errors.image?.type === "required" && (
                <p role="alert" className="text-error">
                  {errors.image.message}
                </p>
              )}
              {/* errors will return when field validation fails  */}

              <select
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                {...register("role")}
              >
                <option value="customers">Customers</option>
                <option value="seller">Seller</option>
              </select>
              <input
                type={isShow ? "text" : "password"}
                placeholder="Enter your 6 digit password"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                {...register("password", {
                  required: "password field must be required",
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-error">
                  {errors.password.message}
                </p>
              )}
              {/* errors will return when field validation fails  */}

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
              <input
                className="btn btn-sm w-full btn-accent"
                value="Create Account"
                type="submit"
              />
            </form>
            <div className="divider "></div>
            <p>
              Already have a account?{" "}
              <Link to={"/log-in"} className="underline text-blue-800 cursor-pointer">
                Click Here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
