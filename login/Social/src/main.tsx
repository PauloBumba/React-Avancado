import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-wrivz6i4lpokldp3.us.auth0.com"
    clientId="FJUUJoGjby55zpVoiUIiaXj5b5MW0VjN"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
