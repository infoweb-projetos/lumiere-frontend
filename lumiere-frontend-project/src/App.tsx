import { Route, Routes } from 'react-router-dom';
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import Individual from '../src/components/cards/individual/';
import HomePage from '../src/pages/homepage/';
import Cadastro from './pages/cadastro';
import { RequireAuth } from './auth/privateRoute';
import { Login } from './pages/login';
import { InitialPage } from './pages/inicial';
import EditarPerfil from './pages/editar-perfil-advogado';

import './index.css';
import { CreateMeet } from './pages/criar-reuniao';
import { DetalhamentoCaso } from './pages/pagamento-reunião';
import CasoAdvogado from './pages/caso-advogado';
import CriarCaso from './pages/criar-caso';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados />} />
      <Route path="/ProcurarAdvogados/:id" element={<Individual />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Casos" element={<CasoAdvogado />} />
      <Route
        path="/Casos/:id"
        element={
          <RequireAuth>
            <DetalhamentoCaso />
          </RequireAuth>
        }
      />
      <Route
        path="/Criar-Caso"
        element={
          <RequireAuth>
            <CriarCaso />
          </RequireAuth>
        }
      />
      <Route
        path="/EditarPerfil"
        element={
          <RequireAuth>
            <EditarPerfil />
          </RequireAuth>
        }
      />
      <Route
        path="/Inicial"
        element={
          <RequireAuth>
            <InitialPage />
          </RequireAuth>
        }
      />

      <Route
        path="/Criar-Reuniao/:id"
        element={
          <RequireAuth>
            <CreateMeet />
          </RequireAuth>
        }
      />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
