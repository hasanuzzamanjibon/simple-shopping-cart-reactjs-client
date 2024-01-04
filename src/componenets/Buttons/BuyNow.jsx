const BuyNow = () => {
  return (
    <button className="flex w-full max-w-3xl min-w-max items-center justify-center rounded-md transition duration-300 bg-green-500 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none active:bg-green-800 visited:bg-green-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Buy Now
    </button>
  );
};

export default BuyNow;
