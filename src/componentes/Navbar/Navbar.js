import React, { useState } from "react";
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import Culturando from '../../imagens/culura.png'


const Navbar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const abrirMenu = () => {
      setMenuAtivo(!menuAtivo);
    };
  
    const fecharMenu = () => {
      setMenuAtivo(false)
    }

  return (
    <div className="Navbar">
      <nav>
        <div id="nome">
          <Link to="/"><img src={Culturando} alt="Nome do projeto" /></Link>
          
        </div>
        
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/Cadastro">Cadastre-se</Link>
        <Link onClick={fecharMenu} to="/Cursos">Cursos</Link>
        <Link onClick={fecharMenu} to="/Sobre-nós">Sobre nós </Link>
      </section>
    </div>
  );
};
export default Navbar;