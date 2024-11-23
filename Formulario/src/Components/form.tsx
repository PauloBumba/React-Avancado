import React, { useState } from 'react';

export const Form = () => {
  // Estado para armazenar os dados do formulário com checkbox
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    aceitoTermos: false
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    aceitoTermos: ''
  });

  // Função para lidar com a alteração dos campos, incluindo o checkbox
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Função para validar os campos
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.aceitoTermos) {
      newErrors.aceitoTermos = 'Você deve aceitar os termos e condições';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert(`Dados do Formulário: ${JSON.stringify(formData)}`);
    }
  };

  return (
    <div className="container-fluid">
      <div className='p-2 rounded d-flex justify-content-center align-items-sm-center my-5'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-check-label'>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
            />
            {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
          </div>
          
          <div className=''>
            <label className='form-check-label'>E-mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          
          <div className='form-switch my-3'>
            <label>
              <input
                type="checkbox"
                name="aceitoTermos"
                checked={formData.aceitoTermos}
                onChange={handleChange}
                className='form-check-input'
              />
              Aceito os termos e condições
            </label>
            {errors.aceitoTermos && <div className="invalid-feedback d-block">{errors.aceitoTermos}</div>}
          </div>
          
          <button type="submit" className='btn btn-primary w-100 my-3'>Enviar</button>
        </form>
      </div>
    </div>
  );
};
