import React from "react";
import Login from "./Components/login";
import Profile from "./Components/Profile";
import LogoutButton from "./Components/Profile";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Autenticação com Google e Facebook</h1>
      <Login />
      <Profile />
      <LogoutButton/>
    </div>
  );
};

export default App;
