import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ProductsDetails from "../pages/ProductDetails/ProductsDetails";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
import Dashboard from "../layouts/Dashboard";

import StatisticsAdmin from "../dashboard/Admin/StatisticsAdmin";
import UserManagement from "../dashboard/Admin/UserManagement";
import ProductsManagement from "../dashboard/Admin/ProductsManagement";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import axios from "axios";
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
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Registration />,
      },
      {
        path: "products/:id",
        element: <ProductsDetails />,
        loader: ({ params }) => axios.get(`http://localhost:3001/products/${params.id}`),
      },
      {
        path: "products/category/:category",
        element: <CategoryProducts />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3001/products/category/${params.category}`),
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
      {
        path: "admin/user-management",
        element: <UserManagement />,
      },
      {
        path: "admin/products-management",
        element: <ProductsManagement />,
      },
      {
        path: "admin/chat",
        element: <div>Chat Bot is Here</div>,
      },
    ],
  },
]);
export default router;
