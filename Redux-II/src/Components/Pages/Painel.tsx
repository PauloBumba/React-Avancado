import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../root.Roducer";
import { Logout } from "../../Reducers/reducers";
import { useNavigate } from "react-router-dom";

export const Painel: React.FC = () => {
  const user = useSelector((state: RootState) => state.Users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(Logout()); // Dispara a ação de logout
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <div className="card p-4 shadow">
      <h2 className="card-title">Bem-vindo, {user?.name}!</h2>
      <p className="card-text">Email: {user?.email}</p>
      <input
        type="button"
        value="Sair"
        className="btn btn-danger mt-3"
        onClick={handleLogout} // Chama a função de logout ao clicar no botão
      />
    </div>
  );
};
