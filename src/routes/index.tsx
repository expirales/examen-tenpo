import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { ROUTE_NAMES } from "./routeNames";
import useAuthStore from "../store/authStore";

export default function AppRoutes() {
  const token = useAuthStore((state) => state.user.token);
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.LOGIN}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.HOME}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.ALL}
        element={
          <Navigate to={token ? ROUTE_NAMES.HOME : ROUTE_NAMES.LOGIN} replace />
        }
      />
    </Routes>
  );
}
