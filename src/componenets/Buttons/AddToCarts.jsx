const AddToCarts = () => {
  return (
    <button className="flex w-full max-w-3xl min-w-max items-center justify-center rounded-md bg-green-500 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none transition duration-300 active:bg-green-800 visited:bg-green-800">
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
  );
};

export default AddToCarts;
