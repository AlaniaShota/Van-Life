import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./Pages/about";
import Home from "./Pages/home";
import Vans, { loader as vansLoader } from "./Pages/Vans/vans";
import VansSinglePage, {
  loader as vansSinglePageLoader,
} from "./Pages/Vans/vansSinglePage";
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Host/Dashboard";
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

const router = createBrowserRouter(
  [
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
              element: <ProtectedRoute children={<Dashboard />} />,
            },
            {
              path: "income",
              element: <ProtectedRoute children={<Income />} />,
            },
            {
              path: "reviews",
              element: <ProtectedRoute children={<Reviews />} />,
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
                  element: <ProtectedRoute children={<HostVansInfo />} />,
                },
                {
                  path: "pricing",
                  element: <ProtectedRoute children={<HostVansPricing />} />,
                },
                {
                  path: "photo",
                  element: <ProtectedRoute children={<HostVansPhoto />} />,
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
  ],
  // createRoutesFromElements(
  //   <Route element={<Layout />}>
  //     <Route index element={<Home />} />
  //     <Route path="about" element={<About />} />
  //     <Route path="vans" element={<Vans />} loader={vansLoader} />
  //     <Route path="login" element={<Login />} />
  //     <Route
  //       path="vans/:id"
  //       element={<VansSinglePage />}
  //       loader={vansSinglePageLoader}
  //     />

  //     <Route path="host" element={<HostLayout />}>
  //       <Route
  //         index
  //         element={<Dashboard />}
  //         loader={async () => await requireAuth()}
  //       />
  //       <Route
  //         path="income"
  //         element={<Income />}
  //         loader={async () => await requireAuth()}
  //       />
  //       <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
  //       <Route
  //         path="vans/:id"
  //         element={<HostVansDetail />}
  //         loader={hostVansDetailLoader}
  //       >
  //         <Route
  //           index
  //           element={<HostVansInfo />}
  //           loader={async () => await requireAuth()}
  //         />
  //         <Route
  //           path="pricing"
  //           element={<HostVansPricing />}
  //           loader={async () => await requireAuth()}
  //         />
  //         <Route
  //           path="photo"
  //           element={<HostVansPhoto />}
  //           loader={async () => await requireAuth()}
  //         />
  //       </Route>
  //       <Route
  //         path="reviews"
  //         element={<Reviews />}
  //         loader={async () => await requireAuth()}
  //       />
  //     </Route>
  //     <Route path="*" element={<ErrorPage />} />
  //   </Route>,
  // ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
