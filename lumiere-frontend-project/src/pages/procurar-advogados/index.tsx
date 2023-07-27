import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { MontH1 } from '../../components/texts/monteserrat/h1';
import {DisplayH1} from '../../components/texts/display-sm/h1';

import { CardProcurarAdvogados } from '../../components/cards/card-procurar-advogados';
interface PropsAdvs{
    id: number,
    nome: string,
    email: string,
    cnpj: string,
    historico: string,
    areaDeAtuacao: string,
}
export default function ProcurarAdvogados () {
    const [search, setSearch] = useState("");
    const [optionsAdvs, setOptionsAdvs] = useState<string[]>([]);

    const api = axios.create({
        baseURL: 'http://localhost:3000'
    })
    const [advs, setAdvs] = useState([])

    useEffect(() => {
    async function loadAdvs() {
      const response = await api.get('/advogado')
      

      setAdvs(response.data)

    }
    loadAdvs()
  }, [])

  const filtro = advs.filter((adv : PropsAdvs) => adv.nome.toLowerCase().includes(search.toLowerCase()));
    return(
    <>
        <main className=" pb-4 pl-16 pr-16 pt-24 bg-gray-200">
            <div className="flex flex-col items-center">
                <div className="w-fit"><DisplayH1>Procurar advogados</DisplayH1></div>
                <div className="border-2 border-gray-50 rounded p-6 mb-6 mt-6 w-full flex flex-row justify-center">
                    <input className="font-mont pl-10 pr-10 pt-5 pb-5" placeholder="Pesquisar"type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <Select
                        isMulti
                        name="Área de atuação"
                        
                        className="basic-multi-select"
                        classNamePrefix="select"
  />
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-x-10">
                {filtro.map((adv : PropsAdvs) => (<CardProcurarAdvogados name={adv.nome} description="Advogado muito top" rating="4" photourl='/michael-s.svg'/>))}
            </div>
        
        </main>
        
    </>
    )
}