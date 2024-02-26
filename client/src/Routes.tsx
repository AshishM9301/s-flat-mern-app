import { createBrowserRouter, defer } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { ProtectedRoute, NormalRoute } from "./auth/VRoutes";
import AddProduct from "./pages/Admin/Product/AddProduct/AddProduct";
import AddCategory from "./pages/Admin/Category/AddCategory/AddCategory";
import AddSeries from "./pages/Admin/Series/AddSeries/AddSeries";
import VerifyPage from "./pages/Verify/VerifyPage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ProductPage from "./pages/Admin/Product/ProductPage/ProductPage";
import SellerProductsPage from "./pages/Admin/Product/SellerProductsPage/SellerProductsPage";
import CategoryPage from "./pages/Admin/Category/CategoryPage/CategoryPage";
import { useMeMutation } from "./store/services/authApi";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      try {
        const user = window.localStorage.getItem("token");
        resolve(user);
      } catch (err) {
        console.log(err);
      }
    }, 3000)
  );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => defer({ userPromise: getUserData() }),
    handle: {
      crumb: () => "Home",
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <NormalRoute component={Login} />,
        handle: {
          crumb: () => "Login",
        },
      },
      {
        path: "verify",
        element: <NormalRoute component={VerifyPage} />,
      },
      {
        path: "signup",
        element: <NormalRoute component={SignUp} />,
        handle: {
          crumb: () => "Sign up",
        },
      },
      {
        path: "admin",
        // element: <ProtectedRoute component={Dashboard} />,
        children: [
          {
            path: "home",
            element: <ProtectedRoute component={Dashboard} />,
          },
          {
            path: "add-product",
            element: <ProtectedRoute component={AddProduct} />,
          },
          {
            path: "add-category",
            element: <ProtectedRoute component={AddCategory} />,
          },
          {
            path: "add-series",
            element: <ProtectedRoute component={AddSeries} />,
          },
          {
            path: "my-products",
            element: <ProtectedRoute component={SellerProductsPage} />,
          },
          {
            path: "category",
            element: <ProtectedRoute component={CategoryPage} />,
          },
        ],
      },
    ],
  },
]);
