import { useState } from "react";
import icone from "../../../public/icone.png";
import "./style.scss";

export const Login: React.FC = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    lembrar: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const [valid, setValid] = useState({
    name: false,
    email: false,
  });

  const Handle = (e) => {
    const { name, type, value, checked } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Validação ao digitar (removendo erro e marcando como válido)
    if (name === "name" || name === "email") {
      const isValid = !!value.trim(); // Verifica se o campo não está vazio
      setErrors((prevErrors) => ({ ...prevErrors, [name]: !isValid }));
      setValid((prevValid) => ({ ...prevValid, [name]: isValid }));
    }
  };

  const sub = (e) => {
    e.preventDefault();

    // Validação final ao submeter
    const newErrors = {
      name: !value.name.trim(),
      email: !value.email.trim(),
    };

    setErrors(newErrors);

    // Atualiza os campos válidos
    setValid({
      name: !!value.name.trim(),
      email: !!value.email.trim(),
    });

    if (Object.values(newErrors).some((err) => err)) {
      return; // Não prosseguir se houver erros
    }

    alert(
      `Nome: ${value.name}\nEmail: ${value.email}\nLembrar: ${value.lembrar}`
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <form
          action=""
          className="border shadow-lg p-4 needs-validation"
          onSubmit={sub}
          noValidate
        >
          <div className="text-center my-5">
            <img src={icone} alt="" className="bg-dark img-fluid" />
            <h1 className="fs-4 fw-normal my-2">
              Faça login para desfrutar da sua Barbearia
            </h1>
          </div>

          {/* Nome */}
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.name ? "is-invalid" : valid.name ? "is-valid" : ""
              }`}
              id="name"
              name="name"
              placeholder="Digite seu nome"
              onChange={Handle}
              value={value.name}
            />
            {errors.name && (
              <div className="invalid-feedback">O nome é obrigatório.</div>
            )}
            {valid.name && (
              <div className="valid-feedback">Nome preenchido corretamente!</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${
                errors.email ? "is-invalid" : valid.email ? "is-valid" : ""
              }`}
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={Handle}
              value={value.email}
            />
            {errors.email && (
              <div className="invalid-feedback">O email é obrigatório.</div>
            )}
            {valid.email && (
              <div className="valid-feedback">Email preenchido corretamente!</div>
            )}
          </div>

          {/* Lembrar */}
          <div className="my-3">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <div className="form-switch my-3">
            <input
              type="checkbox"
              name="lembrar"
              id="checkbox"
              className="form-check-input bg-success"
              onChange={Handle}
              checked={value.lembrar}
            />
            <label htmlFor="checkbox" className="form-check-label">
              Lembrar de mim
            </label>
          </div>

          {/* Botão de Submit */}
          <div className="mb-3">
            <input
              type="submit"
              value="Entrar"
              className="btn btn-success w-100"
            />
          </div>

          <div className="text-center">
            <a href="#">Não fez cadastro? Faça o cadastro</a>
          </div>
        </form>
      </div>
    </div>
  );
};
