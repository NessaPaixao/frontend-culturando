import './CursosContainer.scss';
import { Link } from 'react-router-dom';
import React from 'react';


const CursosContainer = ({ img, titulo, texto, botao, url }) => {
    return (
        <div className="CaixaCursos">

            <div className="CursosDis">
                <img src={img} alt="" />
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <Link to={url}><button div="clicavel">{botao}</button></Link>
                <div id="Risco"></div>

            </div>


        </div>


    )
}

export default CursosContainer;
