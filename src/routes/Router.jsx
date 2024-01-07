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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProduct from "../dashboard/Seller/AddProduct";
import MyProducts from "../dashboard/Seller/MyProducts";
import StatisticsSeller from "../dashboard/Seller/StatisticsSeller";
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
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
        element: <div className="py-5">Admin Chat Bot is Here</div>,
      },
      {
        path: "seller/add-product",
        element: <AddProduct />,
      },
      {
        path: "seller/my-product",
        element: <MyProducts />,
      },
      {
        path: "seller/statistics",
        element: <StatisticsSeller />,
      },
      {
        path: "seller/chat",
        element: <div className="py-5">Seller Chat Bot is Here</div>,
      },
    ],
  },
]);
export default router;
