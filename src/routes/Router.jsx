import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ProductsDetails from "../pages/ProductDetails/ProductsDetails";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
import Dashboard from "../layouts/Dashboard";

import StatisticsAdmin from "../dashboard/Admin/StatisticsAdmin";
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin/statistics",
        element: <StatisticsAdmin />,
      },
    ],
  },
]);
export default router;
