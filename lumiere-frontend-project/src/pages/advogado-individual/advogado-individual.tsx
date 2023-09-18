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

interface PropsAdv{
    id : number | null,
}
interface PropsAdvsList {
    id: number;
    nome: string;
    email: string;
    cnpj: string;
    historico: string;
    areaDeAtuacao: string;
  } 
export const AdvogadoIndividual = ({id} : PropsAdv) => {
    const a = true; 
    const api = axios.create({
        baseURL: 'http://localhost:3000'
    })
    const [advs, setAdvs] = useState([]);

    useEffect(() => {
      async function loadAdvs() {
        const response = await api.get('/advogado');
  
        setAdvs(response.data);
      }
      loadAdvs();
    }, []);

    console.log(id)
    return(
        <>
        {a ? <MenuNoLogin /> : <MenuLogin />}
            <div className="flex flex-row">
                {advs.map((adv : PropsAdvsList, index: Number) => 
                {
                    
                    console.log(adv.id)
                    if(id == index){
                        return(

                            <CardPageAdvogadoIndividual 
                            referencia={"null"}
                            name={adv.nome} 
                            description={"Advogado muito top"} 
                            rating={"4"} 
                            photourl={"/elizia-advogada.svg"}/>
                        )
                    }

                }
                    
                    
                    
                )}
            </div>
            <div className="pl-20 pr-20 pt-8 bg-gray-200">
                <MontH2 className="text-3xl mb-10">Avaliações</MontH2>
                <div className="bg-white">
                    <Comentario
                    referencia={"null"}
                    name={"Raquel Garcia"} 
                    description={"Advogado muito top"} 
                    rating={"4"} 
                    photourl={"/comentario-exemplo.svg"} />
                </div>
            </div>
            <Footer/>
        </>
    )
}