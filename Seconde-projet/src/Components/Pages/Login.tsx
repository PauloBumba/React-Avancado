import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    check: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: false, senha: false });
  const navigate=useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Limpa os erros ao digitar
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Validações
    const newErrors = {
      email: !formData.email.includes("@"),
      senha: formData.senha.length < 6,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return; // Se houver erros, interrompe o envio
    }

    // Login fictício de exemplo
    if (formData.email === "admin@admin.com" && formData.senha === "admin123") {
      alert("Login bem-sucedido como administrador!");
      navigate("/admin"); 
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-4">
      <form className="w-100" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
        <div className="border shadow-lg rounded p-3">
          <h1 className="fs-4 text-center mb-4">Bem-vindo de volta!</h1>
          <p className="text-center text-muted mb-4">
            Faça login para acessar sua plataforma e aproveitar todos os benefícios.
          </p>

          {/* Email */}
          <div className="mb-4 input-group">
            <label htmlFor="email" className="input-group-text">
              <i className="fa fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Digite seu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">Por favor, insira um e-mail válido.</div>
            )}
          </div>

          {/* Senha */}
          <div className="mb-3 input-group">
            <label htmlFor="senha" className="input-group-text">
              <i className="fa fa-lock"></i>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="senha"
              className={`form-control ${errors.senha ? "is-invalid" : ""}`}
              placeholder="Digite sua senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <span
              className="input-group-text bg-white"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
            {errors.senha && (
              <div className="invalid-feedback">
                A senha deve ter pelo menos 6 caracteres.
              </div>
            )}
          </div>

          {/* Lembrar de mim */}
          <div className=" form-switch mb-3">
            <input
              type="checkbox"
              id="remember"
              className="form-check-input"
              name="check"
              checked={formData.check}
              onChange={handleChange}
            />
            <label htmlFor="remember" className="form-check-label">
              Lembrar de mim
            </label>
          </div>

          {/* Botão de enviar */}
          <div>
            <input type="submit" value="Enviar" className="w-100 btn btn-primary" />
          </div>

          <div className="text-center my-3">
            Ainda não se cadastrou? <Link to="/cadastro">Faça o cadastro</Link>
          </div>

          <div className="text-center">
            <Link to="/recuperar">Esqueceu a senha?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
