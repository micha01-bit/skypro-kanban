import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export function PrivateRoute() {
  const { user } = useContext(AuthContext);
  const token = user?.token;
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
