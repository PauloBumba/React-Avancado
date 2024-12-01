import React, { useState, useRef, useEffect, FormEvent } from "react";

export const 
Form: React.FC = () => {
    const iname = useRef<HTMLInputElement>( null) 
    const iemail = useRef<HTMLInputElement>(null) 
    const ipassword = useRef<HTMLInputElement>(null) 

 const sub =(event:FormEvent)=>{
    event.preventDefault();
   
    console.log(iemail.current?.value) }
  return (
    <div>
        <div className="container ">
            <form action="" className="border  p-4"  onSubmit={sub}>
                <div className="col mb-2">
                    <label htmlFor="name" className="form-label">Nome</label>
                  <input type="text"
                   name="" 
                 
                   id="name" 
                   className="form-control w-100 " ref={iname}/>
                                 </div>
                <div className="col  mb-2">
                    <label htmlFor="name" className="form-label">Email</label>
                  <input type="text" name="" id="Email" className="form-control w-100"ref={iemail}/>
                  
                </div>
                <div className="col   mb-2">
                    <label htmlFor="name" className="form-label">Senha</label>
                  <input type="password" name="" id="Senha" className="form-control w-100" ref={iemail}/>
                  
                </div>
                <input type="submit" value="Enviar" className="btn btn-primary w-100 my-3 mx-auto" />
            </form>
        </div>
    </div>
    )
};
