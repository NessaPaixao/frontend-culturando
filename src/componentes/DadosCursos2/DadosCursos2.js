import React from "react";
import './DadosCursos2.scss';
import pintura from '../../imagens/pintura.jpeg';


const DadosCursos2 = () => {

    return(
        <div className="Todos2">
            <img src={pintura} alt=""></img>
            <h1>Pintura em Tela </h1>
            <div className="requisitos2">
                    <h2>TURMA 01</h2>
                    <p>Dia: Segunda-feira</p>
                    <p>Horário: 13:00 às 14:30</p>
                    <p>Faixa etária: 10 a 18 anos</p>
                    <p>Local: CECIN</p>
                    <button>INSCREVA-SE</button>
                    <div className="Linha"></div>
                    <h2>TURMA 02</h2>
                    <p>Dia: Terça-feira</p>
                    <p>Horário:16:00 às 17:30</p>
                    <p>Faixa etária: acima de 19 anos</p>
                    <p>Local: CECIN</p>
                    <button>INSCREVA-SE</button> 
            
                    
            </div>
            

        </div>
    )
}


export default DadosCursos2;
