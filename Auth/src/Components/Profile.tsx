import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Usuário já está autenticado, você pode redirecioná-lo para outra página
      console.log('Usuário já autenticado:', user);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Fazer login</button>
      ) : (
        <div>
          <h2>Bem-vindo, {user.name}!</h2>
          <img src={user.picture} alt={user.name} />
          <button onClick={() => logout({ returnTo: window.location.origin })}>Sair</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
