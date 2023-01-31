import React from 'react';
import { Consultores } from './Consultores'

export const Inicio = ({nombre, apPaterno, apMaterno}) => {
  
  return (
    <>
      <div className='user-name'>Consultor: {nombre} {apPaterno} {apMaterno}</div>
      <Consultores/>
    </>
    
  )
}