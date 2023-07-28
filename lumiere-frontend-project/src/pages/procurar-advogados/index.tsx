import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select, { MultiValue } from "react-select";
import { MontH1 } from '../../components/texts/monteserrat/h1';
import {DisplayH1} from '../../components/texts/display-sm/h1';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { Footer } from '../../components/footer';

import { CardProcurarAdvogados } from '../../components/cards/card-procurar-advogados';
const a = true;

interface PropsAdvs{
    id: number,
    nome: string,
    email: string,
    cnpj: string,
    historico: string,
    areaDeAtuacao: string,
}
interface PropsOptions{
    value: string,
    label: string,
}

export default function ProcurarAdvogados () {


    const [search, setSearch] = useState("");
    const [optionsAdvs, setOptionsAdvs] = useState<PropsOptions[]>([]);

    const api = axios.create({
        baseURL: 'http://localhost:3000'
    })
    const [advs, setAdvs] = useState([])
    useEffect(() => {
    async function loadAdvs() {
      const response = await api.get('/advogado')
      

      setAdvs(response.data)
      const newOptionsAdvs = response.data.map((adv: PropsAdvs) => ({
        value: adv.nome,
        label: adv.nome
    }));

    setOptionsAdvs(newOptionsAdvs); 
    }
    loadAdvs()
    
  }, [])

  const filtro_barra = advs.filter((adv : PropsAdvs) => adv.nome.toLowerCase().includes(search.toLowerCase()));
  const [filtro_select, setFiltroSelect] = useState<MultiValue<PropsOptions>>();

    const selectedOptions = filtro_select?.values ?? [];
    return(
    <>
        {a ? <MenuNoLogin /> : <MenuLogin />}
        <main className=" pb-4 pl-16 pr-16 pt-24 bg-gray-200">
            <div className="flex flex-col items-center">
                <div className="w-fit"><DisplayH1>Procurar advogados</DisplayH1></div>
                <div className="border-2 border-gray-50 rounded p-6 mb-6 mt-6 w-full flex flex-row justify-center">
                    <input className="w-2/4 font-mont pl-10 pr-10 pt-5 pb-5" placeholder="Pesquisar advogado por nome"type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
           
            <div className="flex flex-row flex-wrap justify-between gap-x-10 gap-y-3 pb-20">
                {filtro_barra.map((adv : PropsAdvs) => (<CardProcurarAdvogados name={adv.nome} description="Advogado muito top" rating="4" photourl='/michael-s.svg'/>))}
                
            </div>
            <Footer />
        </main>
        
    </>
    )
}