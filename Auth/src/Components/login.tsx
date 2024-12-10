import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleGoogleLogin = () => {
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  const handleFacebookLogin = () => {
    loginWithRedirect({ connection: 'facebook' });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default Login;
