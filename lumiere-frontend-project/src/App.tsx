import { MenuLogin } from './components/menu/menu-login';
import { MenuNoLogin } from './components/menu/menu-no-login';
import { DisplayTitulo } from './components/texts/display-sm/titulo';
import { MontH1 } from './components/texts/monteserrat/h1';
import { MontP } from './components/texts/monteserrat/p';

function App() {
  return(
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados/>}/>
    <Route path="/ProcurarAdvogados/:id" element={<Individual/>}/>

  </Routes>
  )
}

export default App;
