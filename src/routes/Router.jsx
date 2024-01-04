import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ProductsDetails from "../componenets/HomeComponent/ProductsDetails";
import CategoryProducts from "../componenets/HomeComponent/CategoryProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/:id",
        element: <ProductsDetails />,
        loader: ({ params }) => fetch(`http://localhost:3001/products/${params.id}`),
      },
      {
        path: "products/category/:category",
        element: <CategoryProducts />,
        loader: ({ params }) => fetch(`http://localhost:3001/products/category/${params.category}`),
      },
    ],
  },
]);
export default router;
