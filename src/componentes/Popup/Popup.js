import React from 'react';
import './Popup.scss';
import { Link } from 'react-router-dom';


const Popup = () => {

    return ( 
        <div className="fundo">
                    <h1>Você foi cadastrado com sucesso!</h1>
                    <p> <span>Atenção: </span>O inscrito/a (caso seja de menor levar responsável portando documento) terá o prazo de 5 dias para comparecer 
                        até o local citado portando os seguintes documentos para concluir a inscrição:
                        <p>*Copia do RG</p>
                        <p>*Copia do CPF</p>
                        <p>*Copia do comprovante de residência</p>
                        <p>*1 foto 3X4</p>
                    </p>
                    <Link to="/Cursos"><button > OK</button></Link>    
        </div>
    )
}
export default Popup;