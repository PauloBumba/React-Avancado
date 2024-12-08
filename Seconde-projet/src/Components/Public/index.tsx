import React from "react";
import { Nav } from "./Navbar/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import "./style.scss"

export const Comun : React.FC = ()=>{
    return(
        <div className="">
            <Nav/>
            <main >
                <Outlet/>
            </main>
            <div className=""><Footer/></div>
        </div>
    )
}