import "./css/App.css";
//
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginRoot from "./router/loginRoot.jsx"
import LoginContainer from "./assets/component/loginContainer.jsx";
import RegisterContainer from "./assets/component/RegisterContainer.jsx";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    children: [
      {
        path: "/login",
        element: <LoginContainer />
      },
      {
        path: "/register",
        element: <RegisterContainer />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
