import React from "react";

export const BarberCarousel: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Explore Nossa Barbearia</h2>
      <div id="barberCarousel" className="carousel slide" data-bs-ride="carousel">
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
              src="https://via.placeholder.com/800x400?text=Interior+da+Barbearia"
              className="d-block w-100"
              alt="Interior da Barbearia"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ambiente Confortável</h5>
              <p>Desfrute de um espaço acolhedor e moderno.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Equipe+de+Profissionais"
              className="d-block w-100"
              alt="Equipe de Profissionais"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Equipe de Profissionais</h5>
              <p>Especialistas em cortes e barbas para todos os estilos.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Serviços+Exclusivos"
              className="d-block w-100"
              alt="Serviços Exclusivos"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Serviços Exclusivos</h5>
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
    </div>
  );
};
