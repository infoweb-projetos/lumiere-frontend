import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MontH1 } from '../../components/texts/monteserrat/h1';
import {DisplayH1} from '../../components/texts/display-sm/h1';

import { CardProcurarAdvogados } from '../../components/cards/card-procurar-advogados';
interface PropsAdvs{
    id: number,
    nome: string,
    email: string,
    cnpj: string,
    historico: null,
    areaDeAtuacao: null,
}
export default function ProcurarAdvogados () {
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
    return(
    <>
        <main className=" pb-4 pl-16 pr-16 pt-24 bg-gray-200">
            <div className="flex flex-col items-center">
                <div className="w-fit"><DisplayH1>Procurar advogados</DisplayH1></div>
                <div className="border-2 border-gray-50 rounded p-6 mb-6 mt-6 w-full">Barra de pesquisa</div>
            </div>
            <div className="flex flex-row justify-between gap-x-10">
                {/*
                <CardProcurarAdvogados name="Michael S" description="Advogado muito top" rating="4" photourl='/michael-s.svg'/>
                <CardProcurarAdvogados name="Michael S" description="Advogado muito top" rating="4" photourl='/michael-s.svg'/> */}
                
                {advs.map((adv : PropsAdvs) => (<CardProcurarAdvogados name={adv.nome} description="Advogado muito top" rating="4" photourl='/michael-s.svg'/>))}
            </div>
        
        </main>
        
    </>
    )
}