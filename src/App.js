import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';
import Cadastro from './componentes/CadastroMaior/CadastroMaior.js';
import DadosP from './componentes/DadosCursos2/DadosCursos2.js'
import Cursos from './componentes/TodosCursos/TodosCursos.js';
import DadosB from './componentes/DadosCursos/DadosCursos.js';
import Sobre from './componentes/Sobre/Sobre.js';
import Popup from './componentes/Popup/Popup.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Sobre-nós" component={Sobre} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/Cursos" component={Cursos} />
      <Route path="/Informações-Pintura" component={DadosP} />
      <Route path="/Informações-Balé" component={DadosB} />
      <Route path="/Inscrição-P-1" component={Popup}/>
      <Route path="/Inscrição-P-2" component={Popup}/>
      <Route path="/Inscrição-B-1" component={Popup}/>
      <Route path="/Inscrição-B-2" component={Popup}/>
    </BrowserRouter>
  ) 
}
export default App;
