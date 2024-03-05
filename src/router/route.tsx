import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));

const NotFound = lazy(() => import("@/pages/404"));

const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default rootRoutes;
