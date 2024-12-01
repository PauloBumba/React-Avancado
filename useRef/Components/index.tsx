import React, { useState, useRef, useEffect } from "react";

export const RefNumber: React.FC = () => {

  const ref1 = useRef<number>(0);

  function Aumentar() {
    ref1.current += 1; // Atualiza o valor da referência
   
    console.log(ref1.current);
  }

 
  return (
    <div className="container">
      <h1>useRef por número</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg text-center"
        onClick={Aumentar}
      >
        Enviar
      </button>
      <p>{ref1.current}</p>
    </div>
  );
};
