import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const MyComponent = () => {
  useEffect(() => {
    // Aplicando o ScrollReveal no card
    ScrollReveal().reveal('.card', {
      distance: '50px',
      duration: 1000,
      origin:"lleft",
      delay: 200,
      reset: true, // Repetir a animação sempre que o elemento voltar à tela
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-6">
          {/* Card do Bootstrap com ScrollReveal */}
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
          <div className="card shadow-sm p-4" >
            <h5 className="card-title text-center">Olá, Mundo!</h5>
            <p className="card-text text-center">
              Este é um exemplo de animação com ScrollReveal em um card utilizando o Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
