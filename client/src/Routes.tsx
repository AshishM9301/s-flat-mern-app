import { createBrowserRouter, defer } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { ProtectedRoute, NormalRoute } from "./auth/VRoutes";
import AddProduct from "./pages/Admin/Product/AddProduct/AddProduct";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("token");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => defer({ userPromise: getUserData() }),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <NormalRoute component={Login} />,
      },
      {
        path: "signup",
        element: <NormalRoute component={SignUp} />,
      },
      {
        path: "admin",
        element: <ProtectedRoute component={AddProduct} />,
      },
    ],
  },
]);
