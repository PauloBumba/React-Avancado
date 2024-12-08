import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 sticky-bottom  bg-dark text-light mt-auto">
      <div className="row py-3 container-fluid">
        {/* Seção de Termos e Privacidade */}
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Termo de Responsabilidade</h3>
          <Link to="/views/privacy" className=" mb-3 text-decoration">Privacidade</Link>
          <Link to="/views/term" className="nav-link text-decoration">Termos de Uso</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />

        {/* Seção de Equipe */}
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Equipe</h3>
          <Link to="/views/sobre" className=" text-decoration">Sobre Nós</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />

        {/* Seção de Feedback e Suporte */}
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Feedback e Suporte</h3>
          <Link to="/views/feedback" className="nav-link text-decoration">Feedback e Avaliações</Link>
          <Link to="/suporte" className="nav-link text-decoration ">Suporte e Contato</Link>
        </div>
        <hr className="w-75 mx-auto d-md-none" />

        {/* Seção de Redes Sociais */}
        <div className="col-md-3 text-center text-md-left">
          <h3 className="fs-5">Siga-nos nas Redes Sociais</h3>
          <div className="btn-group">
           
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light fs-5 p-2 mx-2"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-primary"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light fs-5 p-2 mx-2"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-danger"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light fs-5 p-2 mx-2"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-primary"></i>
            </a>
          </div>
          <p>&copy; BarberGO 2024</p>
        </div>
      </div>
    </footer>
  );
};
