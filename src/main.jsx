import "./css/App.css";
//
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginRoot from "./router/loginRoot.jsx";
import LoginContainer from "./assets/component/loginContainer.jsx";
import RegisterContainer from "./assets/component/RegisterContainer.jsx";
import Home from "./router/home.jsx";
import ProductPage from "./router/productPage.jsx";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    children: [
      {
        path: "/",
        element: <LoginContainer />,
      },
      {
        path: "/login",
        element: <LoginContainer />,
      },
      {
        path: "/register",
        element: <RegisterContainer />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
