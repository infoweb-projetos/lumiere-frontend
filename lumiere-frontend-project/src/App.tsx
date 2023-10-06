import { Route, Routes } from 'react-router-dom';
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import Individual from '../src/components/cards/individual/';
import HomePage from '../src/pages/homepage/';
import './index.css';
import Cadastro from './pages/cadastro';
import { RequireAuth } from './auth/privateRoute';
import { Login } from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados />} />
      <Route path="/ProcurarAdvogados/:id" element={<Individual />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route
        path="/Authteste"
        element={
          <RequireAuth>
            <div className="flex h-screen w-screen items-center justify-center gap-1 bg-gray-100">
              <h1 className="text-gray-200">Autenticado</h1>
              <button
                className="rounded bg-primary-500 px-4 py-2 text-gray-200"
                onClick={() => {
                  localStorage.removeItem('token');
                }}
              >
                Log out
              </button>
            </div>
          </RequireAuth>
        }
      />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
