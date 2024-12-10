import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Você precisa fazer login.</div>;
  }

  return (
    <div>
      <h2>Bem-vindo, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
