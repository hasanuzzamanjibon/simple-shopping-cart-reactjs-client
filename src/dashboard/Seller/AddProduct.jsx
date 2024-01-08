import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="py-5 max-w-4xl relative mx-auto">
      <div className="flex items-center gap-1 border-b-2 border-b-teal-600 py-2">
        <div className="h-3 w-3 rounded-full bg-teal-600"></div>
        <div className="h-3 w-3 rounded-full bg-teal-600"></div>
        <div className="h-3 w-3 rounded-full bg-teal-600"></div>
      </div>
      <h2 className="pb-1 pt-3 font-semibold text-2xl inline-block border-b-4 border-double border-teal-600">
        Add Product
      </h2>
      <div className="py-4">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex w-full  flex-col gap-2 bg-transparent "
        >
          <input
            type="text"
            placeholder="name"
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.name?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600`
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            {...register("name", { required: "Product Name Must Be Required.", maxLength: 20 })}
          />{" "}
          {errors.name?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.name.message}
            </p>
          )}
          <input
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.price?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600`
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            type="number"
            placeholder="price"
            {...register("price", { required: "Product Price Must Be Required." })}
          />{" "}
          {errors.price?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.price.message}
            </p>
          )}
          <input
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.category?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600`
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            type="text"
            placeholder="category"
            {...register("category", { required: "Product Category Must Be Required." })}
          />{" "}
          {errors.category?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.category.message}
            </p>
          )}
          <input
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.rating?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600 `
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            type="number"
            placeholder="rating"
            {...register("rating", { required: "Product Rating Must Be Required." })}
          />{" "}
          {errors.rating?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.rating.message}
            </p>
          )}
          <input
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.available?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600`
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            type="number"
            placeholder="available quantity"
            {...register("available", { required: "Available Quantity Must Be Required." })}
          />{" "}
          {errors.available?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.available.message}
            </p>
          )}
          <textarea
            className={`w-full bg-gray-100 px-3 py-2 rounded  ${
              errors.description?.type === "required"
                ? `text-red-600 placeholder:text-red-600
        focus:outline-red-600`
                : `text-gray-700 placeholder:text-gray-400
        focus:outline-gray-400`
            } `}
            placeholder="description"
            {...register("description", { required: "Product Description Must Be Required." })}
          />{" "}
          {errors.description?.type === "required" && (
            <p role="alert" className="text-error">
              {errors.description.message}
            </p>
          )}
          <input className="btn btn-md w-full mt-5 btn-accent" value="Add Product" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
