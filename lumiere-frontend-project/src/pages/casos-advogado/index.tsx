import axios from 'axios';
import  { useState, useEffect, useRef } from 'react';
import Select, { MultiValue } from "react-select";
import { MontH1 } from '../../components/texts/monteserrat/h1';
import { MontH2 } from '../../components/texts/monteserrat/h2';
import {DisplayH1} from '../../components/texts/display-sm/h1';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { Footer } from '../../components/footer';
import { CardPageAdvogadoIndividual} from '../../components/cards/card-page-advogado-individual'
import { Comentario} from '../../components/cards/comentario'
import { DisplaySubTitulo } from '../../components/texts/display-sm/subtitulo';
import axiosInstance from '../../api/axiosinstance';
import { LinhaCaso } from '../../components/cards/card-listar-casos';
import { Button_ghost_dark } from '../../components/buttons/button-ghost-dark';
interface PropsAdv{
    id : string | null,
}
interface PropsList {
    id: string;
    descricao: string;
    advogadoId: string;
    createdAt: string

  } 
export default function CasoAdvogado () {
    const button_ref = useRef("/CriarCaso")
    const a = false; 
    const api = axios.create({
        baseURL: 'https://lumiere-api.vercel.app'
    })
    const [cases, setCases] = useState([]);

    useEffect(() => {
      async function loadCases() {
        const response = await axiosInstance.get('/casos/me');
  
        setCases(response.data);
      }
      loadCases();
    }, []);
    console.log(cases)
    return(
        <>
        {a ? <MenuNoLogin /> : <MenuLogin />}
        <main className="pt-24 bg-gray-200 pl-16 pr-16 min-h-screen">
            <div className="flex flex-row justify-between mt-8 mb-4">
                <DisplayH1 className="text-black text-[42px]">Casos em andamento</DisplayH1>
                <div className="flex flex-row justify-center">
                    <a className="font-mont p-3 bg-gray-50 h-fit rounded-sm mr-8" href='CriarCaso'> Adicionar Caso </a>
                    <a className="font-mont p-3 bg-gray-50 h-fit rounded-sm">Excluir caso</a>
                </div>
            </div>
            <div className="bg-primary-500 font-mont text-white text-[26px] rounded-sm grid grid-cols-5 font-bold p-4">
                    <h1></h1>
                    <h1>Caso</h1>
                    <h1>Descrição breve</h1>
                    <h1>Nome do cliente</h1>
                    <h1>Data de abertura</h1>
                </div>
            {cases.map((c:PropsList) =>
                <div key={c.id} className="grid grid-cols-5 bg-white pl-4 pr-4 pt-8 pb-8 gap-x-2">
                    <LinhaCaso  id={c.id} titulo={c.descricao} createdAt={c.createdAt} advogadoId={c.advogadoId}></LinhaCaso>
                </div>
         )}                
            <div className="flex flex-row justify-between mt-8 mb-4">
                            <DisplayH1 className="text-black text-[42px]">Casos concluídos</DisplayH1>
                      
                                <a className="font-mont p-3 bg-gray-50 h-fit rounded-sm">Excluir caso</a>
    
                        </div>
                        <div className="bg-primary-500 font-mont text-white text-[26px] rounded-sm grid grid-cols-5 font-bold p-4">
                                <h1></h1>
                                <h1>Caso</h1>
                                <h1>Descrição breve</h1>
                                <h1>Nome do cliente</h1>
                                <h1>Data de abertura</h1>
                            </div>
                        {cases.map((c:PropsList) =>
                            <div key={c.id} className="grid grid-cols-5 bg-white pt-8 pb-8 gap-x-2">
                                <LinhaCaso  id={c.id} titulo={c.descricao} createdAt={c.createdAt} advogadoId={c.advogadoId}></LinhaCaso>
                            </div>
                    )}                
            <Footer />
        </main>
   
        </>
    )
}