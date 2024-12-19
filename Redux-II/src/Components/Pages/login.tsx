import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../root.Roducer";
import { Logins, Logout } from "../../Reducers/reducers";
import { useNavigate } from "react-router-dom";

export const Login1: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.Users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação dos campos
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true); // Marca o formulário como validado
      return;
    }

    // Se a validação passou
    setValidated(true);
    if (user === null) {
      dispatch(Logins({ name, email }));
      navigate("/painel");
    } else {
      dispatch(Logout());
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          className={`border rounded p-5 shadow-lg needs-validation ${
            validated ? "was-validated" : ""
          }`}
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4">Login</h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Informe teu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">Por favor, informe o seu nome.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Informe teu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Por favor, informe um email válido.</div>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox"
            />
            <label className="form-check-label" htmlFor="checkbox">
              Lembrar de mim
            </label>
            
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {user ? "Logout" : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};
