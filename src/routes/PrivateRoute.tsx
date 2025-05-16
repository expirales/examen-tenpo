import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function PrivateRoute({ children }: Props) {
  const token = useAuthStore((state) => state.user.token);
  return token ? children : <Navigate to="/login" replace />;
}
