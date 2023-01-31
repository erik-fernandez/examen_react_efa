import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const ConsultorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (url) => {
      navigate(url)
  }

  return (
    <>
        <div>Consultor</div>
        <br></br>
        <p>ID: {location.state.consultorId}</p>
        <p>Nombre: {location.state.consultorNombre}</p>
        <div><button onClick={() => navigateTo("/")} className="Button">Regresar</button></div>
    </>    
  )
}