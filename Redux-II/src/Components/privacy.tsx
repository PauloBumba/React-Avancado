import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../root.Roducer"; // Ajuste o caminho de acordo com o seu projeto
import { Navigate } from "react-router-dom";

interface PrivacyProps {
  children: ReactNode;
}

export const Privacy: React.FC<PrivacyProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.Users.user);

  if (!user) {
    // Redireciona o usuário para a página principal se não estiver autenticado
    return <Navigate to="/" replace />;
  }

  return <>{children}</>; // Renderiza o conteúdo protegido se o usuário estiver autenticado
};
