import React, { useState } from 'react';


export const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <div className="container-fluid">
      <div className="row bg-primary  ">
        <div className="d-flex justify-content-between align-items-center my-3">
            <h1 className='text-white fs-4 fw-bold'>MyShop</h1>
          <div className="mx-2 navbar">
            {/* Link de Login ou Logout */}
            <a
              href="#"
              onClick={handleLoginClick}
              className="nav-link fw-bold bg-opacity-50 d-flex align-items-center text-white btn btn-success" 
            >
              {isLoggedIn ? (
                < >
                   Logout<i className="fa fa-sign-out mx-2 " aria-hidden="true"></i>
                </>
              ) : (
                <>
                  Login<i className="fa fa-sign-in mx-2" aria-hidden="true"></i>
                </>
              )}
            </a>
            {/* Link para o Carrinho */}
            <a
              href="#"
              className="nav-link fw-bold bg-opacity-50 d-flex align-items-center text-white btn btn-danger ms-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
               Carrinho <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
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
