import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/about";
import Home from "./Pages/home";
import Vans, { loader as vansLoader } from "./Pages/Vans/vans";
import VansSinglePage, {
  loader as vansSinglePageLoader,
} from "./Pages/Vans/vansSinglePage";
import Login, { loader as loginLoader, action as loginAction } from "./Pages/Login/Login";
import Layout from "./Components/Layout";
import Dashboard, {loader as dashboardLoader} from "./Pages/Host/Dashboard";
import Reviews from "./Pages/Host/Reviews";
import Income from "./Pages/Host/Income";
import HostLayout from "./Components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./Pages/Host/Vans/HostVans";
import HostVansDetail, {
  loader as hostVansDetailLoader,
} from "./Pages/Host/Vans/HostVansDetail";
import HostVansInfo from "./Pages/Host/Vans/HostVansInfo/HostVansInfo";
import HostVansPricing from "./Pages/Host/Vans/HostVansPricing/HostVansPricing";
import HostVansPhoto from "./Pages/Host/Vans/HostVansPhoto/HostVansPhoto";
import ErrorPage from "./Pages/Error/404";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./Server/server";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
      },
      {
        path: "login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction
      },
      {
        path: "vans/:id",
        element: <VansSinglePage />,
        loader: vansSinglePageLoader,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: "host",
            element: <ProtectedRoute loading={<Dashboard />} />,
            loader: dashboardLoader
          },
          {
            path: "income",
            element: <ProtectedRoute loading={<Income />} />,
          },
          {
            path: "reviews",
            element: <ProtectedRoute loading={<Reviews />} />,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
          },
          {
            path: "vans/:id",
            element: <HostVansDetail />,
            loader: hostVansDetailLoader,
            children: [
              {
                index: "vans/:id",
                element: <HostVansInfo />,
              },
              {
                path: "pricing",
                element: <HostVansPricing />,
              },
              {
                path: "photo",
                element: <HostVansPhoto />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
