
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./App.tsx";
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import AdvogadoIndividual from '../src/pages/procurar-advogados/';
import HomePage from '../src/pages/homepage/';
import "./index.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
<QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</QueryClientProvider>,                
);
