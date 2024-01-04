import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ProductsDetails from "../componenets/HomeComponent/ProductsDetails";
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
    ],
  },
]);
export default router;
