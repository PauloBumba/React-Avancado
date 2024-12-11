import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


 interface Propsprivate {
    children:React.ReactNode
 }

 export const ProtectedRoute:React.FC<Propsprivate> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};


