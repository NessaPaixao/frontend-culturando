import React, {useState} from "react";
import './DadosCursos.scss';
import bale from '../../imagens/balé.png';

const DadosCursos = () => {   
    
    return(
        <div className="Todos">
            <img src={bale} alt=""></img>
            <h1>Ballet</h1>
            <div className="requisitos">
                    <h2>TURMA 01</h2>
                    <p>Dia: Terça-feira</p>
                    <p>Horário: 14:00 às 15:00</p>
                    <p>Faixa etária: 3 a 6 anos/Baby</p>
                    <p>Local: CECIN</p>
                    <p >Início das aulas: 03/02/2020</p>
                    <Link to="/Inscrição-B-1"><button>INSCREVA-SE</button> </Link>
                    <div className="Linha"></div>
                    <h2>TURMA 02</h2>
                    <p>Dia: Quinta-feira</p>
                    <p>Horário: 14:00 às 15:00</p>
                    <p>Faixa etária: 12 a 17 anos/Juvenil</p>
                    <p>Local: CECIN</p>
                    <p>Início das aulas: 03/02/2020</p>
                    <Link to="/Inscrição-B-2"><button>INSCREVA-SE</button> </Link>
            
                    
            </div>
        </div>
    )
}


export default DadosCursos;