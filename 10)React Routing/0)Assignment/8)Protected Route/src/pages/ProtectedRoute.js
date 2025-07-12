import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn }) => {
  if (!loggedIn) {
    // Redirect unauthenticated users to home
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Render child routes
};