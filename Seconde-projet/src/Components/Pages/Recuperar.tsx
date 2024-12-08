import { Link } from "react-router-dom";

export const Recuperar: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column ">
      {/* Conteúdo principal */}
      <div className="d-flex justify-content-center align-items-center my-5 p-2 flex-grow-1">
        <form action="" className="border rounded p-4 shadow w-100" style={{ maxWidth: "400px" }}>
          <div className="my-3">
            <h1 className="text-secondary fs-5 text-center">Você está 1 passo para recuperar a sua senha</h1>
          </div>
          <div className="input-group my-3">
            <label htmlFor="" className="input-group-text">
              <i className="fa fa-lock"></i>
            </label>
            <input type="password" className="form-control" required placeholder="Digite seu email" />
          </div>
          <button type="submit" className="d-block mx-auto w-100 border rounded btn btn-primary">
            Enviar
          </button>
          <hr />
          <div className="text-center my-2">
            Voltei para fazer o <Link to="/login">Login</Link>
          </div>
        </form>
      </div>

      {/* Footer */}
     
    </div>
  );
};
