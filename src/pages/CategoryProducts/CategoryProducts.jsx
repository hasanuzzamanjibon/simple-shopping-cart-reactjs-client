import { useLoaderData } from "react-router-dom";
import ProductCard from "../../componenets/ProductCard/ProductCard";

const CategoryProducts = () => {
  const { data } = useLoaderData();
  const categoryName = [...new Set(data.map((item) => item?.category))];

  return (
    <div className="px-4 space-y-7 py-6">
      <h1 className=" font-class capitalize text-2xl font-bold border-b-2 border-double border-accent inline-block bg-gradient-to-r from-sky-300  to-sky-600 text-transparent bg-clip-text">
        buy the look : {categoryName[0] || ""}
      </h1>
      <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data && data?.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default CategoryProducts;
