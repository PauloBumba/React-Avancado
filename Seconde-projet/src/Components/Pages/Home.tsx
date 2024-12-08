import React, {useEffect} from "react";
import "../../Components/Public/style.scss";
import { useLocation } from "react-router-dom";
export const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
  return (
    <div className="container-fluid bg-light">
      <div className="row">
          <div className="p-0 container-fluid">
              <div
                id="barberCarousel"
                className="carousel slide "
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
              
                <div className="carousel-inner ">
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
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <div className="text-center p-5 rounded bg-gradient">
              <h1 className="fs-3 fw-bold text-dark mb-4">
                Seja bem-vindo(a) ao nosso agendamento online!
              </h1>
              <p className="fs-5 text-secondary">
              Agende seus horários pelo BarberGO e descubra a praticidade
Com o BarberGO, você pode agendar seus horários com facilidade e rapidez, garantindo que seu visual esteja sempre impecável.
Descubra a praticidade e a conveniência de escolher seus serviços e barbeiros favoritos, tudo em um único lugar.
Experimente agora e veja a diferença em sua rotina!
              </p>
              <button className="btn btn-primary ">Saiba Mais</button>
            </div>
          </div>
          <section id="serv">
              <div className=" " >
                <h1 className="text-center mb-4  rounded ">Nossos Serviços</h1>
                <div className="row justify-content-center">
              
                  <div className="col-md-4 mb-3">
                    <div className="card shadow-lg h-100 border-0 rounded">
                      <img
                        src="./client-doing-hair-cut-barber-shop-salon.jpg"
                        className="card-img-top img-thumbnail p-3 rounded  "
                        alt="Corte de Cabelo"
                      /> <h5 className="card-header text-center">Corte de Cabelo</h5>
                      <div className="card-body text-center">
              
                        <p className="card-text">
                          Estilos modernos e tradicionais para destacar sua personalidade.
                        </p>
                        <button className="btn btn-primary d-block mx-auto">Agendar Agora</button>
                      </div>
                    </div>
                  </div>
                  {/* Card 2: Barba */}
                  <div className="col-md-4 mb-3">
                    <div className="card shadow-lg h-100 border-0 rounded">
                      <img
                        src="./handsome-man-shaving-beard-barbershop copy.jpg"
                        className="card-img-top img-thumbnail p-3 rounded"
                        alt="Barba"
                      />
                        <h5 className="card-header text-center">Barba</h5>
                      <div className="card-body text-center">
              
                        <p className="card-text text-center">
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
                        src="./image2.png"
                        className="card-img-top img-thumbnail p-3 rounded"
                        alt="Cabelo e Barba"
                      />
                        <h5 className="card-header text-center" >Cabelo e Barba</h5>
                      <div className="card-body text-center">
              
                        <p className="card-text text-center">
                          O pacote completo para um visual renovado e elegante.
                        </p>
                        <button className="btn btn-primary">Agendar Agora</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section id="aval">
              <div className=" py-5 row " >
                <h1 className="text-center mb-4 transparent">O que nossos clientes dizem</h1>
                <div className="row text-center">
                  <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                      <div className="card-body ">
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
          </section>
      </div>
    </div>
  );
};
