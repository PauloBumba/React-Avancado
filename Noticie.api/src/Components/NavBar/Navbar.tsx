import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../Routes/Pages/Home";
import { Cadastro } from "../Routes/Pages/cadastro";
import { Login } from "../Routes/Pages/Login";
import "./style.scss"

export const NavBar: React.FC = () => {
  return (
    <div className="container-fluid">
      <Router>
        <nav className=" d-flex justify-content-between  align-items-center  bg-dark bg-gradient bg-opacity-25 p-4  ">
          {/* Substitua o src abaixo por uma imagem confiável */}
          <img
            src="https://masterbundles.com/wp-content/uploads/2023/02/spaco_cm-01--606.jpg"
            alt="Logo"
            className="navbar-logo"
          />
          <ul className="mx-md-auto">
            <li >
              <Link to="/" className="active text-decoration-none fs-5">Página Inicial</Link>
            </li>
            <li>
              <Link to="/cadastro" className=" text-decoration-none fs-5">Cadastro</Link>
            </li>
            <li>
              <Link to="/login" className=" text-decoration-none fs-5">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
