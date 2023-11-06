import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ loading }) => {
  const isLog = localStorage.getItem('loggedin');
  const location = useLocation();

  return isLog ? (
    <>
      {loading}
    </>
  ) : (
    <Navigate to="/login?message=You must log in first" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
