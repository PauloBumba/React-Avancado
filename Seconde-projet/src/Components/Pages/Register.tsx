import React from "react";
import { Link } from "react-router-dom";

export const Register: React.FC = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <form
        action=""
        className="col-12 col-sm-6 col-md-4 border rounded my-4 p-4 shadow"
        style={{ maxWidth: "400px" }}
      >
        <div className="my-3">
          <h1 className="fs-5 text-center">
            Cadastra-te para fazer o uso da sua plataforma
          </h1>
        </div>

        <div className="mb-4">
          
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu nome"
            />
          </div>
        </div>

        <div className="mb-4">
          
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
            />
          </div>
        </div>

        <div className="mb-4">
          
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
            />
          </div>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </div>

        <div className="">
          <p className="text-center">
            Já fez o cadastro? <Link to="/login">Faça o login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
