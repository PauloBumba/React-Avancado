import React, { FC, useState } from "react";

export const States: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [contador1, setContador1] = useState(0);

  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-header fs-3 text-center p-2">Contador</div>
        <div className="card-body">
          <div className="col-sm-3 mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setContador(contador + 1)}
            >
              Incrementar
            </button>
            <h1 className="card-title">{contador}</h1>
          </div>
          <div className="col-sm-3 mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setContador1(contador1 - 1)}
            >
              Decrementar
            </button>
            <h1 className="card-title">{contador1}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
