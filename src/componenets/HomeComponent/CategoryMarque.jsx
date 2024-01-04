import { Link } from "react-router-dom";
import useGetAllProducts from "../../customHook/useGetAllProducts";

function CategoryMarque() {
  const [products] = useGetAllProducts();
  const Catagories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="flex justify-center items-center gap-6 my-4">
      {Catagories &&
        Catagories.map((category) => (
          <Link
            to={`/products/category/${category}`}
            className="rounded-full border px-4 py-1 font-semibold"
            key={category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
    </div>
  );
}

export default CategoryMarque;
