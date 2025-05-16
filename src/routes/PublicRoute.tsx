import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import type { PropsWithChildren } from "react";

type PublicRouteProps = PropsWithChildren;

export default function PublicRoute({ children }: PublicRouteProps) {
  const token = useAuthStore((state) => state.user.token);
  return token ? <Navigate to="/" replace /> : children;
}
