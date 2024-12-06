import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="sticky-footer bg-dark text-light">
      <div className="row py-3 container-fluid">
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Termo de Responsabilidade</h3>
          <Link to="/views/privacy" className="nav-link">Privacidade</Link>
          <Link to="/views/term" className="nav-link">Termos de Uso</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Equipe</h3>
          <Link to="/views/sobre" className="nav-link">Sobre Nós</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Feedback e Suporte</h3>
          <Link to="/views/feedback" className="nav-link">Feedback e Avaliações</Link>
          <Link to="/views/suport" className="nav-link">Suporte e Contato</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Siga-nos nas Redes Sociais</h3>
          <div className="btn-group">
            <a href="https://instagram.com" target="_blank" className="btn btn-outline-light fs-5 p-2 mx-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" className="btn btn-outline-light fs-5 p-2 mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" className="btn btn-outline-light fs-5 p-2 mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p>&copy; BarberGO 2024</p>
        </div>
      </div>
    </footer>
  );
};
