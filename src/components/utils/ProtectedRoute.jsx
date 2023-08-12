import { Navigate, Outlet } from "react-router-dom";

const ROUTES_DICTIONARY = {
  vpfsa: "vpfsa-value",
  vpfa: "adjusted-influence-value",
};

export const ProtectedRoute = ({ value, redirectPath = "/" }) => {
  const condition = localStorage.getItem(ROUTES_DICTIONARY[value]);
  if (condition === null || condition === undefined) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
