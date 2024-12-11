import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Callback = () => {
  const location = useLocation();
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (code) {
      exchangeCodeForToken(code);
    } else {
      loginWithRedirect(); // Caso o código não esteja presente, faça a autenticação novamente
    }
  }, [location]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await axios.post(
        'https://dev-wrivz6i4lpokldp3.us.auth0.com/oauth/token',
        {
          client_id: 'FJUUJoGjby55zpVoiUIiaXj5b5MW0VjN',
          client_secret: 'Yf5X-9oYKAyqYUE9nNIre14utf1QlzIyg2YFvp41bMj6yI0eQVogW8_ywJGKY5X3', // Utilize um segredo seguro, normalmente no backend
          code,
          redirect_uri: window.location.origin,
          grant_type: 'authorization_code',
        }
      );

      const { access_token, id_token } = response.data;
      console.log('Access Token:', access_token);
      // Armazene os tokens (normalmente em um contexto ou localStorage)
      // Você pode usar o token para fazer chamadas à API com o token de acesso
    } catch (error) {
      console.error('Erro ao trocar código por token:', error);
    }
  };

  return <div>Processando login...</div>;
};

export default Callback;
