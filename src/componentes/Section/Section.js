import React from 'react';
import './Section.scss';
import CursosD from '../CursosD/CursosD';
import bale from '../../imagens/balé.png';
import teatro from '../../imagens/teatro.png';
import canto from '../../imagens/canto.jpg';
import { Link } from 'react-router-dom';


const Section = () => {
    return (
        <div className="section" >

        <div className="bale">
            <img src={bale} alt="imagem de balé"></img> 
            <h2>Curso de Ballet</h2>
            <p>A dança clássica, também conhecida como ballet, é um tipo de dança que reúne uma série de técnicas e movimentos específicos.</p>
            <Link to="/cadastro"><button>CADASTRE-SE</button></Link>
        </div>

        <div className="teatro">
            <CursosD 
            img={teatro} 
            titulo="Curso de Teatro" 
            texto="Teatro é um termo de origem grega que designa simultaneamente o conjunto de peças dramáticas para apresentação em público e o edifício onde são apresentadas essas peças." 
            nome="EM BREVE"/>
        </div>
        <div className="canto" >
            <CursosD 
            img={canto} 
            titulo="Curso de Canto" 
            texto="Canto é o ato de produzir sons musicais utilizando a voz, variando a altura de acordo com a melodia e o ritmo" 
            nome="EM BREVE"
            />
        </div>

        </div>

        
    )
}
export default Section;