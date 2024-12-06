import React from "react"

export const Register:React.FC = ()=>{
    return( 
        <div className="container-fluid d-flex justify-content-center align-items-center">
               <form action="" className="col-12 col-sm-6 col-md-4 border rounded my-3 p-4  " style={{ maxWidth: "400px" }}>

                <div className="mt-2">
                    <h1 className="fs-5 text-center">Cadastra-te para fazer o uso da sua plataforma </h1>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Digite sua nome"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="Digite sua email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Senha</label>
                    <input type="text" className="form-control" placeholder="Digite sua senha"/>
                </div>
                
               <div className="mb-2"><button type="submit" className="btn btn-primary w-100">Enviar</button>
               </div>
                
               </form>
        </div>
    )
}