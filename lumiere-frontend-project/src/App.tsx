import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProcurarAdvogados from '../src/pages/procurar-advogados/';
import AdvogadoIndividual from '../src/pages/procurar-advogados/';
import HomePage from '../src/pages/homepage/';
import "./index.css";

function App() {
  return(
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/ProcurarAdvogados" element={<ProcurarAdvogados/>}>
    <Route path="AdvogadoIndividual/:id"element={<AdvogadoIndividual/>}/>
    </Route>
  </Routes>
  )
}

export default App;
