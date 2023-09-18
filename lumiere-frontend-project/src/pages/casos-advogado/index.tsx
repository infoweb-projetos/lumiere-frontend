import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

interface PropsAdv{
    id : string | null,
}
interface PropsList {
    id: string;
    descricao: string;
    advogadoId: string;
    createAt: string

  } 
export const CasoAdvogado = ({id} : PropsAdv) => {
    const a = false; 
    const api = axios.create({
        baseURL: 'https://lumiere-api.vercel.app'
    })
    const [cases, setCases] = useState([]);

    useEffect(() => {
      async function loadCases() {
        const response = await api.get('/caso');
  
        setCases(response.data);
      }
      loadCases();
    }, []);
    const filtro = cases.filter((c:PropsList) => c.advogadoId == id);

    return(
        <>
        {a ? <MenuNoLogin /> : <MenuLogin />}
        <main className="pt-24 bg-gray-200 pl-16 pr-16">
            <DisplayH1 className="text-black text-[40px]">Casos em andamento</DisplayH1>
            <table className='table-auto'>
                <thead>
                    <tr className='bg-primary-500 font-mont text-white text-[30px] rounded-sm '>
                        <th className=''></th>
                        <th className=''>Caso</th>
                        <th className=''>Descrição breve</th>
                        <th className=''>Nome do cliente</th>
                        <th className=''>Data de abertura</th>
                    </tr>
                </thead>


            </table>
            <div>
            {filtro.map((c:PropsList) =>
                 
                    <h1>{id}</h1>
            )}
            </div>
        </main>
   
        </>
    )
}