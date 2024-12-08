import React from "react"
import { Nav } from "./Components/Public/Navbar/Nav"
import {BrowserRouter  as  Router, Routes , Route } from "react-router-dom"
import { Login } from "./Components/Pages/Login"
import { Home } from "./Components/Pages/Home"
import { Register } from "./Components/Pages/Register"
import { Suporte } from "./Components/Pages/suporte"
import { Comun} from "./Components/Public/index"
import { Recuperar } from "./Components/Pages/Recuperar"
import { AdminPanel } from "./Components/Admin/AdminPainel"

export const App:React.FC = () =>{
  return(
      <div className="">
        
      <Router>
        
         
           <Routes >
            <Route element={<Comun/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastro" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/suporte" element={<Suporte/>}/>
              <Route path="/recuperar" element={<Recuperar/>}/>
            </Route>
            <Route path="/admin" element={<AdminPanel />}>
        
       
      </Route>
          </Routes>
           
            </Router>
      </div>
  )
}