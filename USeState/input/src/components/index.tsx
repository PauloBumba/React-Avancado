import React, { useState } from "react";

 export const  Input:React.FC = () => 
{
    const [value, SetValue]=useState<string>("")
   
   return(
    <div className="container my-5">
        <div className="card">
            <div className="card-header">
                <h1>Seja Benvindo</h1>
            </div>
            <div className="card-body col-12">
                <input 
                type="text"
                value={value}
                placeholder="Digite qualquer coisa"
                className=" "
                
                onChange={(e)=>{
                    SetValue(e.target.value)
                } }
                
                  />

                  <div className=" my-5">
                        {value? value: "Não foi digitado nada "}
                  </div>
            </div>
        </div>

    </div>
   
)
} 