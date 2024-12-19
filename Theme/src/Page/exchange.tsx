import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { setTheme } from "../Reducer/reducer"; // Ação de troca de tema
import "./index.css"; // Importe o arquivo CSS (ou SASS)

export const Exchenge: React.FC = () => {
  const theme = useSelector((state: RootState) => state.Theme.theme);
  const dispatch = useDispatch();

  // Função para alternar o tema
  const handleThemeToggle = () => {
    dispatch(
      setTheme(
        theme.background === "light"
          ? { background: "dark", cor: "white" }
          : { background: "light", cor: "black" }
      )
    );
  };

  return (
    // Contêiner principal com cor de fundo do tema
   <div>
    Lorem, ipsum dolor.
   </div>)
};
