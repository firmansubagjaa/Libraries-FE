import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// add react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
