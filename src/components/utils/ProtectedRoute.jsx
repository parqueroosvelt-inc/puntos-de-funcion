import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ condition, redirectPath = "/" }) => {
  if (!condition) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};
