import { memo } from "react";
import { useRoutes } from "react-router-dom";

import rootRoutes from "./route";

const Router: React.FC = () => {
  const routes = useRoutes(rootRoutes);
  return routes;
};

export default memo(Router);
