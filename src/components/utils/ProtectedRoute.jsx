import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/" }) => {
  const condition = localStorage.getItem("vpfsa-value");
  if (condition === null || condition === undefined) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
