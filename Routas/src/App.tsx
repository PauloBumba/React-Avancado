

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./Components/inde"
import { Login } from "./Components/login"
import { Cadastro } from "./Components/cadastro"


function App() {
  
  return (
    <>
    <div className="container-fluid">
        
        
          <Router>
            <nav className="nav nav-pills " >
            <li className=" nav nav-pills nav-justified nav-fill ">
              <Link to="/" className=" nav-link">Home</Link>
              <Link to="/login" className=" nav-link">Login</Link>
              <Link to="/cadastro"className=" nav-link" >Cadastro</Link>
            </li>
           </nav>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
           

          </Router>
       
    </div>
      
    </>
  )
}

export default App
