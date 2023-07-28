import { Routes, Route} from 'react-router-dom'
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import Individual from '../src/components/cards/individual/';
import HomePage from '../src/pages/homepage/';
import "./index.css";
import Cadastro from './pages/cadastro';

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados/>}/>
      <Route path="/ProcurarAdvogados/:id" element={<Individual/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
    </Routes>
  )
}

export default App;