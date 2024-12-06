import React from "react";

export const Login: React.FC = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <form className="w-100" style={{ maxWidth: "400px" }}>
        <div className="border shadow-lg rounded p-4">
          <h1 className="fs-4 text-center mb-4">Bem-vindo de volta!</h1>
          <p className="text-center text-muted mb-4">
            Faça login para acessar sua plataforma e aproveitar todos os benefícios.
          </p>
          {/* Nome */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Digite seu nome"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite seu email"
              required
            />
          </div>
          {/* Lembrar de mim */}
          <div className="form-check form-switch mb-3">
            <input
              type="checkbox"
              id="remember"
              className="form-check-input"
            />
            <label htmlFor="remember" className="form-check-label">
              Lembrar de mim
            </label>
          </div>
          {/* Botão de login */}
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
};
