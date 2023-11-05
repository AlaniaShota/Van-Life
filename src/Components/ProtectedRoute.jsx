import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ test }) => {
  const isLog = false;
  const location = useLocation();
  return isLog ? (
    <>
      {test}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
