import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';
import Cadastro from './componentes/CadastroMaior/CadastroMaior.js';
import DadosP from './componentes/DadosCursos2/DadosCursos2.js'
import Cursos from './componentes/TodosCursos/TodosCursos.js';
import DadosB from './componentes/DadosCursos/DadosCursos.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/Cursos" component={Cursos} />
      <Route path="/Informações-Pintura" component={DadosP} />
      <Route path="/Informações-Balé" component={DadosB} />
    </BrowserRouter>
  )
}
export default App;
