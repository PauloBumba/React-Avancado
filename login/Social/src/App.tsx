import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Components/private";
import { Login } from "./Components/login";
import { Dashboard } from "./Components/painel";
import { Home } from "./Components/Home";
import Callback from './Components/token';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/callback" element={<Callback />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            
              <Dashboard />
           
          }
        />
        {/* Definindo a rota para a página inicial '/' */}
        <Route path="/" element={<Home/> } />
      </Routes>
    </Router>
  );
};

export default App;
