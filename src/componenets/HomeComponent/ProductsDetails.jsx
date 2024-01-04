import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useGetAllProducts from "../../customHook/useGetAllProducts";
import ProductCard from "../ProductCard/ProductCard";

import AddToCarts from "../Buttons/AddToCarts";
import BuyNow from "../Buttons/BuyNow";
import toast from "react-hot-toast";

const ProductsDetails = () => {
  const { _id, title, price, image, rating, description, category } = useLoaderData();
  const [products] = useGetAllProducts();
  const remaining = products.filter((p) => p._id !== _id);
  const [valueOfQty, setValue] = useState(1);

  const IncrementValue = () => {
    setValue((prev) => prev + 1);
  };

  const DecrementValue = () => {
    if (valueOfQty < 1) {
      toast.error("Sorry, Negetive Number Not Allowed");
    } else {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <div className="px-4 mt-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className=" lg:col-span-1 flex justify-center w-full">
          <img className="h-72 lg:h-96 w-auto " src={image} alt={title} />
        </div>
        <div className="md:col-span-2 text-left">
          <table cellPadding={7} className="text-xl w-full">
            <tbody>
              <tr className="border-b-2 border-dotted border-gray-300">
                <th>Name </th>
                <th>: </th>
                <td>{title}</td>
              </tr>
              <tr className="border-b-2 border-dotted border-gray-300 ">
                <th>Description </th>
                <th>: </th>
                <td>{description}</td>
              </tr>
              <tr className="border-b-2 border-dotted border-gray-300 ">
                <th>Price </th>
                <th>: </th>
                <th>${price}</th>
              </tr>
              <tr className="border-b-2 border-dotted border-gray-300 ">
                <th>Category </th>
                <th>: </th>
                <th>
                  <span className="badge badge-lg badge-primary">{category}</span>
                </th>
              </tr>
              <tr className="border-b-2 border-dotted border-gray-300 ">
                <th>Rating </th>
                <th>: </th>
                <td> {rating.rate} &#9734;</td>
              </tr>
              <tr className="border-b-2 border-dotted border-gray-300 ">
                <th>Available </th>
                <th>: </th>
                <td className="text-green-600 font-semibold"> {rating.count} Qty.</td>
              </tr>
            </tbody>
          </table>
          <div className="py-5">
            <div className="flex justify-center  items-center gap-1">
              <span>Qty</span>
              <div className="flex justify-center items-center border-2 border-gray-300 px-4 py-1">
                <button onClick={DecrementValue}>-</button>
                <input
                  className="w-16 px-2 text-center focus:outline-none"
                  type="number"
                  value={valueOfQty}
                />
                <button onClick={IncrementValue}>+</button>
              </div>
              {/* add */}
              <AddToCarts />
              <BuyNow />
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 justify-items-center mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remaining &&
          remaining.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductsDetails;
