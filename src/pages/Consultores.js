import React from 'react';
import { useNavigate } from "react-router-dom";

const consultores = [
    {id:"1", nombre:"Erik"},
    {id:"2", nombre:"Armando"},
    {id:"3", nombre:"Juan"},
    {id:"4", nombre:"Ricardo"}
]

export const Consultores = () => {
    const navigate = useNavigate();

    const navigateTo = (url,idConsultor,nombre) => {
        navigate(url
            ,{
                state:{
                    consultorId:idConsultor,
                    consultorNombre:nombre
                }
            })
    }

  return (
    <>
        <div>Consultores</div>
        <br></br>
        <table className='tbl-Class'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {consultores.map((consultor,idx) => (
                    <tr key={idx}>
                        <td>{consultor.id}</td><td>{consultor.nombre}</td><td><button onClick={() => navigateTo("consultorDetail",consultor.id,consultor.nombre)} className="Button">Detalle</button></td>
                    </tr>
                ))
                }
            </tbody>
            
                
        </table>         
    </>    
  )
}