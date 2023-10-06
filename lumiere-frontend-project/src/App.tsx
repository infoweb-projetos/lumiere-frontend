import { Routes, Route} from 'react-router-dom'
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import Individual from '../src/components/cards/individual/';
import CasoAdvogado from '../src/pages/casos-advogado/index.tsx';
import HomePage from '../src/pages/homepage/';
import "./index.css";
import Cadastro from './pages/cadastro';
import CriarCaso from '../src/pages/criar-casos-advogado/index.tsx'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados/>}/>
      <Route path="/ProcurarAdvogados/:id" element={<Individual/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
      <Route path="/Casos" element={<CasoAdvogado/>} ></Route>
      <Route path="/CriarCaso" element={<CriarCaso/>} ></Route>
    </Routes>
  )
}

export default App;