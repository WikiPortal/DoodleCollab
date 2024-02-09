import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import Features from "../pages/Features/Features";
import Sketchbook from "../pages/Sketchbook/Sketchbook";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sketchbook",

        element: (
          <PrivateRoute>
            <Sketchbook />
          </PrivateRoute>
        ),
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);
