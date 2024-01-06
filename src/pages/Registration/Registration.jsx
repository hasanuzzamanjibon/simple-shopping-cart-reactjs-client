import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Registration = () => {
  const { handleEmailSIgnup, handleSignOut } = useContext(AuthContext);
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
              const user = result.user;
            })
            .then(() => {
              fetch("http://localhost:3001/addUser", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newUser),
              })
                .then((response) => response.json())
                .then((result) => {
                  if (result.acknowledged) {
                    toast.success("Account Created Successfully! Please, Login Now");
                  }
                });
            })
            .then(() => {
              handleSignOut();
              // logout and login page navigate
            })
            .then(() => {
              navigate("/log-in");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
            });
        }
      });
  };

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
            <button className="bg-teal-500 text-white btn btn-sm ">
              <FaGoogle />
              Sign in with google
            </button>
            <div className="divider !text-gray-800">or sign with email</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex w-full  flex-col gap-2 bg-transparent "
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400 "
                {...register("email", { required: true })}
              />
              <input
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400 "
                {...register("image", {
                  required: "picture is required",
                })}
                type="file"
                id="picture"
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <span>This field is required</span>}
              <select
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                {...register("role")}
              >
                <option value="customers">Customers</option>
                <option value="seller">Seller</option>
              </select>
              <input
                type="password"
                placeholder="Enter your 6 digit password"
                className="w-full bg-gray-100 px-3 py-2 rounded text-gray-700 placeholder:text-gray-400 focus:outline-gray-400"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && <span>Passowrd Not valid</span>}
              <input className="btn btn-md w-full btn-accent" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
