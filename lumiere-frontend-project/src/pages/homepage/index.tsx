import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DisplayTitulo } from '../../components/texts/display-sm/titulo';
import { MontH1 } from '../../components/texts/monteserrat/h1';
import { MontP } from '../../components/texts/monteserrat/p';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { CardAmarelo } from '../../components/cards/card-menu-amarelo';
import { CardMenuBottom } from '../../components/cards/card-menu-foto-bottom';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { Button_ghost_dark } from '../../components/buttons/button-ghost-dark';
import { Footer } from '../../components/footer';

export default function HomePage() {
  interface PropsAdvs {
    id: number;
    nome: string;
    email: string;
    cnpj: string;
    historico: string;
    areaDeAtuacao: string;
  }
  const a = true;
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });
  const [advs, setAdvs] = useState([]);

  useEffect(() => {
    async function loadAdvs() {
      const response = await api.get('/advogado');

      setAdvs(response.data);
    }
    loadAdvs();
  }, []);
  return (
    <>
      {a ? <MenuNoLogin /> : <MenuLogin />}
      <main className=" bg-gray-200  pb-4 pt-24">
        <div className="flex flex-row justify-between p-20">
          <div className="flex flex-col justify-center p-10 ">
            <DisplayH1 className="text-[56px] text-yellow-800">FACILITE SEU CONTATO COM</DisplayH1>
            <DisplayH1 className="text-[56px] text-blue-300">ADVOGADOS</DisplayH1>

            <MontP className="pb-8 pt-8 text-[18px]">
              Crie uma conta na advocacia lumiere e tenha acesso a diversos mecanismos para auxiliar no seu caso!
            </MontP>
            <Button_ghost_dark size="sm" title="CRIAR CONTA ->" type="submit" />
          </div>
          <div>
            <img src="/banner.svg" alt="Um advogado e varios quadradros"></img>
          </div>
        </div>
        <div className="flex flex-col items-center bg-secondary-500 p-44 ">
          <DisplayH1 className="text-[48px]">Veja nossos principais advogados</DisplayH1>
          <div className="flex flex-wrap justify-between gap-x-20 pt-20">
            {advs.map((adv: PropsAdvs, index: number) => {
              if (index < 3) {
                return (
                  <CardAmarelo
                    key={index}
                    name={adv.nome}
                    description="Advogado muito top"
                    rating="4"
                    photourl="/michael-s.svg"
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col items-center p-44 ">
          <DisplayH1 className="text-[48px]">O melhor ambiente para encontrar um advogado</DisplayH1>
          <div className="flex flex-wrap justify-between gap-x-20 pt-20">
            {advs.map((adv: PropsAdvs, index: number) => {
              if (index < 3) {
                return (
                  <CardMenuBottom
                    key={adv.id}
                    name={adv.nome}
                    description="Advogado muito top"
                    rating="4"
                    photourl="/michael-s.svg"
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-row items-center justify-around p-28">
          <div>
            <DisplayH1 className="text-[56px] text-yellow-800">ENCONTRE</DisplayH1>
            <DisplayH1 className="text-[56px] text-blue-300">ADVOGADOS</DisplayH1>
          </div>
          <Button_ghost_dark size="xl" title="CRIAR CONTA" type="submit" />
        </div>
        <Footer />
      </main>
    </>
  );
}
