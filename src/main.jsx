import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// add react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/404";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
