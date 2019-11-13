import React from 'react';
import './ContainerSobre.scss';


const Sobrenos = ({ ldin, imagem, nome, linkedin}) => {
    return (
        <div className="Sobrenos">
            <div className="Perfil">
                <img id="Fotoperfil" src={imagem} alt="f"></img>
                <h2>{nome}</h2>
                   <div id="Redes">
                       <a href={ldin} target="_blank"><img src={linkedin} /></a>
                   </div>


                <div id="linhal"></div>
            </div>
        </div>


        )
}

export default Sobrenos;
