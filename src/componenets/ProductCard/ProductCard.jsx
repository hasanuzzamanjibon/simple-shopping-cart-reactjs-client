import { Rating } from "@smastrom/react-rating";
import { MdInfoOutline } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { _id, title, price, description, image, rating } = product || {};

  console.log(product);
  return (
    <div className="relative cursor-pointer  flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-md">
      <div className="flex justify-center py-8">
        <img className="object-cover h-40" src={image} alt="product image" />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{title.slice(0, 20)}...</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
          </p>
          Rating : {rating.rate}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-3.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
          <button className="text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-950 bg-slate-900 px-5 py-4 text-center rounded-md">
            <MdInfoOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
