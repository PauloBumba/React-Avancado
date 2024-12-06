import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="container-fluid bg-light">
      <div
        id="barberCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#barberCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#barberCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#barberCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="./image1.jpg"
              className="d-block w-100"
              alt="Interior da Barbearia"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-shadow">Ambiente Confortável</h5>
              <p>Desfrute de um espaço acolhedor e moderno.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="./image2.jpg"
              className="d-block w-100"
              alt="Equipe de Profissionais"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-shadow">Equipe de Profissionais</h5>
              <p>Especialistas em cortes e barbas para todos os estilos.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="./image3.jpg"
              className="d-block w-100"
              alt="Serviços Exclusivos"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-shadow">Serviços Exclusivos</h5>
              <p>Atendimento personalizado para realçar sua identidade.</p>
            </div>
          </div>
        </div>

        {/* Controles de Navegação */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#barberCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#barberCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center py-5">
        <div className="text-center p-5 rounded bg-gradient">
          <h1 className="fs-3 fw-bold text-dark mb-4">
            Seja bem-vindo(a) ao nosso agendamento online!
          </h1>
          <p className="fs-5 text-secondary">
            Agende cortes de cabelo, barba e outros serviços de forma rápida e prática.
            Simplifique seu dia com nossa plataforma eficiente.
          </p>
          <button className="btn btn-primary mt-3">Saiba Mais</button>
        </div>
      </div>

      <div className="bg-primary py-5">
        <h1 className="text-center mb-4 text-white rounded ">Nossos Serviços</h1>
        <div className="row justify-content-center">
          {/* Card 1: Corte de Cabelo */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-lg h-100 border-0 rounded">
              <img
                src="https://via.placeholder.com/300x200?text=Corte+de+Cabelo"
                className="card-img-top"
                alt="Corte de Cabelo"
              />
              <div className="card-body">
                <h5 className="card-title">Corte de Cabelo</h5>
                <p className="card-text">
                  Estilos modernos e tradicionais para destacar sua personalidade.
                </p>
                <button className="btn btn-primary">Agendar Agora</button>
              </div>
            </div>
          </div>

          {/* Card 2: Barba */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-lg h-100 border-0 rounded">
              <img
                src="https://via.placeholder.com/300x200?text=Barba"
                className="card-img-top"
                alt="Barba"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Barba</h5>
                <p className="card-text">
                  Aparos e modelagens para manter sua barba impecável.
                </p>
                <button className="btn btn-primary">Agendar Agora</button>
              </div>
            </div>
          </div>

          {/* Card 3: Corte de Cabelo e Barba */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-lg h-100 border-0 rounded">
              <img
                src="https://via.placeholder.com/300x200?text=Cabelo+e+Barba"
                className="card-img-top"
                alt="Cabelo e Barba"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Cabelo e Barba</h5>
                <p className="card-text">
                  O pacote completo para um visual renovado e elegante.
                </p>
                <button className="btn btn-primary">Agendar Agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5">
        <h2 className="text-center mb-4">O que nossos clientes dizem</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <p>"Ótimo atendimento e profissionalismo! Recomendo a todos."</p>
                <small>- João Silva</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <p>"Ambiente acolhedor e cortes impecáveis. Sempre volto!"</p>
                <small>- Maria Oliveira</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
