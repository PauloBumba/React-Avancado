import React, { useState } from 'react';


export const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn); // Alterna entre Login e Logout
  };

  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="d-flex justify-content-between align-items-center my-3">
          <img src="/vite.svg" alt="" className="" style={{ height: 50 }} />
          <div className="mx-2 navbar">
            {/* Link de Login ou Logout */}
            <a
              href="#"
              onClick={handleLoginClick}
              className="nav-link fw-bold bg-opacity-50 d-flex align-items-center"
            >
              {isLoggedIn ? (
                <>
                   Logout
                </>
              ) : (
                <>
                  Login
                </>
              )}
            </a>
            {/* Link para o Carrinho */}
            <a
              href="#"
              className="nav-link fw-bold bg-opacity-50 d-flex align-items-center"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
               Carrinho
            </a>
          </div>
        </div>
      </div>

      {/* Offcanvas para o Carrinho */}
      <div
      
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
       
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Meu Carrinho
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Seu carrinho está vazio.</p>
          {/* Conteúdo adicional do carrinho */}
        </div>
      </div>
    </div>
  );
};
