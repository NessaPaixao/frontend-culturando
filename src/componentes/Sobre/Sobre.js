import React from 'react';
import '../Sobre/Sobre.scss';
import Sobrenos from '../ContainerSobre/ContainerSobre.js';

// Icones do google
import Linkedin from '../../imagens/linkedin.png'
import Gmail from '../../imagens/gmail.png'

// Fotos dos integrantes
import Vanessa from '../../imagens/Vanessa.png';
import Luana from '../../imagens/Luana.png';
import Danilo from '../../imagens/Danilo.jpg';
import Heitor from '../../imagens/Heitor.jpg';
import Giovane from '../../imagens/Giovane.jpg';
import Matheus from '../../imagens/Matheus.jpg'


const Sobre = () => {
    return (
        <div className="Sobre1">
            <div id="Titulo">
                <h1>Sobre nosso Projeto:</h1>
                <p>  O site Culturando tem o intuito de informar e realizar matriculas de cursos na cidade de Caieiras. A intenção do nosso site é fazer com que mais pessoastenha acesso aos diversos cursos culturais disponíveisem nossa cidade. </p>
                <div id="linhal"></div>
                <h2>Equipe</h2>
            </div>

            <div className="Pessoas">

                <Sobrenos ldin="https://www.linkedin.com/in/luana-marques-39785b197/"  imagem={Luana} nome="Luana Marques" linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/vanessa-da-paixão-45553b187"  imagem={Vanessa} nome="Vanessa da Paixão" linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/danilo-owens-679945196/"  imagem={Danilo} nome="Danilo Medeiros"  linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/heitor-borba-da-cruz-b41911190/"  imagem={Heitor}  nome="Heitor Borba da Cruz" linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/giovane-santesso-lima-583099196/"  imagem={Giovane}   nome="Giovane Santesso Lima" linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/matheus-silva-b87861197/"  imagem={Matheus}  nome="Matheus da Silva Antonio"  linkedin={Linkedin} />

            </div>

        </div>

            
    )
}

export default Sobre;