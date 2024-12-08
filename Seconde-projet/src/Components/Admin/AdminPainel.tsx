import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const AdminPanel: React.FC = () => {
  // Controle de estado do menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Função para alternar o menu
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="wrapper">
      {/* Barra Lateral */}
      <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isSidebarOpen ? 'open' : 'closed'}`}>
        <Link to="/" className="brand-link">
          <span className="brand-text font-weight-light">BarberGO</span>
        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              {/* Dashboard */}
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              
              {/* Menu Dropdown Clientes */}
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>
                    Clientes
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/clientes/lista" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lista de Clientes</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/clientes/adicionar" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Adicionar Cliente</p>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Menu Dropdown Agendamentos */}
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt"></i>
                  <p>
                    Agendamentos
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/agendamentos/lista" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lista de Agendamentos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/agendamentos/adicionar" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Adicionar Agendamento</p>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Outros Links */}
              <li className="nav-item">
                <Link to="/servicos" className="nav-link">
                  <i className="nav-icon fas fa-cut"></i>
                  <p>Serviços</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/relatorios" className="nav-link">
                  <i className="nav-icon fas fa-chart-line"></i>
                  <p>Relatórios</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className="content-wrapper col-12">
        {/* Cabeçalho */}
        <header className="main-header navbar navbar-expand navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-sm-none">
              <button className="nav-link" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </button>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user-circle"></i>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="/perfil" className="dropdown-item">Perfil</Link>
                <Link to="/logout" className="dropdown-item">Logout</Link>
              </div>
            </li>
          </ul>
        </header>

        {/* Seção de Conteúdo */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Dashboard - Administração da Barbearia</h3>
                  </div>
                  <div className="card-body">
                    <p>Bem-vindo ao painel de administração da BarberGO. Aqui você pode gerenciar clientes, agendamentos, serviços e mais!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo Alternativo - Renderiza o Dashboard ou conteúdo da rota */}
        <Outlet />
      </div>

      {/* Rodapé */}
      <footer className="main-footer">
        <strong>&copy; 2024 BarberGO</strong> - Todos os direitos reservados.
      </footer>
    </div>
  );
};
