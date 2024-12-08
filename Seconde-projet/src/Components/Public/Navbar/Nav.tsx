import React from "react";
import { Link } from "react-router-dom";


export const Nav: React.FC = () => {
  return (
   
      <nav className="navbar navbar-expand-md navbar-light bg-dark  pb-3 sticky-top ">
      <div className="container-fluid d-flex align-items-center">
        <img src="/icone.png" alt="Logo" className="navbar-brand bg-dark logo "  />
          <button
            className="navbar-toggler bg-white  border-opacity-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-dark"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mt-3 text-white mx-md-auto">
              <li className="nav-item nav">
                <Link className="nav-link nav-fill  w-100  text-white " to="/">
                 Home
                </Link>
              </li>
              <Link className="nav-link w-100 text-white" to="/#serv">
  Serviços
</Link>

<li className="nav-item">
  <Link className="nav-link w-100 text-white" to="/#aval" aria-label="Ir para a seção de Avaliação">
    Avaliação
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link w-100 text-white" to="/cadastro" aria-label="Ir para a seção de Avaliação">
    Cadastro
  </Link>
</li>

        
            </ul>
           
            <Link className="text-decoration-none btn btn-light col-12 col-md-1 " to="/login">
                  Login
                </Link>
           
          </div>
      </div>
      </nav>
   
  );
};
