import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLoginGoogle = async () => {
    await loginWithRedirect({
      connection: "google-oauth2", 
      redirectUri: window.location.origin + "/dashboard" // Redireciona para o Dashboard após login
    });
  };

  const handleLoginFacebook = async () => {
    await loginWithRedirect({
      connection: "facebook", // Conexão para Facebook
      redirectUri: window.location.origin + "/dashboard" // Redireciona para o Dashboard após login
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-sm-center min-vh-100 mx-4">
      <button onClick={handleLoginGoogle}>Login com Google</button>
      <button onClick={handleLoginFacebook}>Login com Facebook</button>
    </div>
  );
};
