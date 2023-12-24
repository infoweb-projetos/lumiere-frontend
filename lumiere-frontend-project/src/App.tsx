import { Route, Routes } from 'react-router-dom';
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import Individual from '../src/components/cards/individual/';
import HomePage from '../src/pages/homepage/';
import './index.css';
import Cadastro from './pages/cadastro';
import { RequireAuth } from './auth/privateRoute';
import { Login } from './pages/login';
import { InitialPage } from './pages/inicial';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados />} />
      <Route path="/ProcurarAdvogados/:id" element={<Individual />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route
        path="/Inicial"
        element={
          <RequireAuth>
            <InitialPage />
          </RequireAuth>
        }
      />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
