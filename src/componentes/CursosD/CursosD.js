import React from 'react';
import './Cursos.scss';



const CursosD = ({img, titulo, texto, nome }) => {
    return (
        <div className="CursosD">
        <img src={img} alt=""/>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <button>{nome}</button>

        </div>
    )
  }
  export default CursosD;