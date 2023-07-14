import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ component: Component }) => {
  const { token } = useAuth();
  if (!token) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <Component />;
};

export const NormalRoute = ({ component: Component }) => {
  const { token } = useAuth();
  if (token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return <Component />;
};
