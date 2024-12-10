import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SocialLoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSocialLogin = (connection) => {
    loginWithRedirect({
      connection,
    });
  };

  return (
    <div>
      <button onClick={() => handleSocialLogin("google-oauth2")}>
        Login com Google
      </button>
      <button onClick={() => handleSocialLogin("facebook")}>
        Login com Facebook
      </button>
    </div>
  );
};

export default SocialLoginButton;
