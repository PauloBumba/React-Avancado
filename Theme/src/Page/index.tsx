import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { setTheme } from "../Reducer/reducer"; // Ação de troca de tema
import "./index.css"; // Importe o arquivo CSS (ou SASS)

export const Index: React.FC = () => {
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
    <div className={theme.background === "light" ? "light-theme" : "dark-theme"}>
      <div className="container-fluid ">
        <div className="col">
          {/* Card com estilo condicional */}
          <div className={`card my-5 mx-5 ${theme.background === "light" ? "light-card" : "dark-card"}`}>
            <div className="card-body">
              <div className="card-title lead">
                Nome: <strong>Paulo Mário Valente Bumba</strong>
              </div>
              <div className="card-subtitle">
                <div className="lead">Email: paulomvbumba@gmail.com</div>
              </div>
              <div className="card-text lead">
                Estudante do curso de Ciência da Computação na Unoesc Videira, tenho 24 anos de
                idade, sou cristão adventista do 7º dia.
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleThemeToggle}>
              Trocar de Tema
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
