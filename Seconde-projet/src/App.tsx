import React from "react"
import { Nav } from "./Components/Public/Navbar/Nav"
import {BrowserRouter  as  Router, Routes , Route } from "react-router-dom"
import { Login } from "./Components/Pages/Login"
import { Home } from "./Components/Pages/Home"
import { Register } from "./Components/Pages/Register"
import { Comun} from "./Components/Public/index"

export const App:React.FC = () =>{
  return(
      <div className="">
        
      <Router>
        
         
           <Routes >
            <Route element={<Comun/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastro" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
            </Route>
          </Routes>
           
            </Router>
      </div>
  )
}