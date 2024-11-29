import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import  {  ThreeDots }  from  'react-loader-spinner' 

export const Effect: React.FC = () => {
  const [Data, SetData] = useState<any>({});
  const [Progress, SetProgress] = useState<boolean>(false);

  useEffect(() => {
    const Git = async () => {
      try {
        const url = "https://api.github.com/users/PauloBumba";
        const response = await axios.get(url);
        if (!response.data) {
          alert("Erro ao buscar dados da API");
        } else {
          SetData(response.data);
          SetProgress(true);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API: ", error);
      }
    };

    Git();
  }, []); // Executa apenas uma vez após a montagem

  return (
    <div className="container-fluid">
      {Progress ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100 rounded shadow my-5">
          <div className="card">
            <div className="card-header my-2">
              <h1>Dados do GitHub</h1>
            </div>
            <div className="card-body my-3">
              <h1>{Data.name}</h1>
              <img
                src={Data.avatar_url}
                alt="Avatar do GitHub"
                className="img-thumbnail rounded"
              />
              <div className="mb-2 text-center">
                <h2 className="card-subtitle">{Data.company || "Não informado"}</h2>
                <p className="card-text">Localização: {Data.location || "Não informado"}</p>
                <p className="card-text">Bio: {Data.bio || "Não informado"}</p>
                <p className="card-text">Número de Repositórios: {Data.public_repos}</p>
                <p className="card-text">Número de Seguidores: {Data.followers}</p>
                <p className="card-text">Data de Criação: {new Date(Data.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="d-flex justify-content-center align-items-center min-vh-100">{<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="red"
            ariaLabel="loading"
        
          />}</p>
      )}
    </div>
  );
};
