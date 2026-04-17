import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

export const ProtectedRoute = ({ isLoggedIn }: ProtectedRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
