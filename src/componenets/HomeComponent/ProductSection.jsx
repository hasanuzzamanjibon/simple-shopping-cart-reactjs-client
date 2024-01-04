import useGetAllProducts from "../../customHook/useGetAllProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
  const [products] = useGetAllProducts();

  return (
    <div className="text-center">
      <h1 className=" font-class capitalize text-2xl font-bold border-b-2 border-double border-accent inline-block bg-gradient-to-r from-sky-400  to-teal-600 text-transparent bg-clip-text">
        buy the look
      </h1>
      <div className=" grid grid-cols-1 justify-items-center mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductSection;
