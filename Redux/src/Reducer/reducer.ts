import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definição da interface do usuário
interface User {
  name: string;
  email: string;
}

// Definição da interface do estado inicial
interface UserState {
  user: User | null;
}


// Estado inicial
const initialState: UserState = {
  user: null,
};

// Criação do Slice
export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Ação de Login
    Login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    // Ação de Logout
    Logout: (state) => {
      state.user = null;
    },
  },
});

// Exportação das ações
export const { Login, Logout } = UserSlice.actions;

// Exportação do reducer
export default UserSlice.reducer