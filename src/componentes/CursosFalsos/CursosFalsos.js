import './CursosFalsos.scss';
import React from 'react';


const CursosContainerF = ({ img, titulo, texto, embreve }) => {
    return (
        <div className="CaixaCursos">

            <div className="CursosF">
                <img src={img} alt="" />
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <div id="botaofalso" ><p>{embreve}</p></div>

                <div id="Risco1"></div>

            </div>


        </div>


    )
}

export default CursosContainerF;
