import  { useState, useEffect } from 'react';
import { MontH2 } from '../../components/texts/monteserrat/h2';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { Footer } from '../../components/footer';
import { CardPageAdvogadoIndividual } from '../../components/cards/card-page-advogado-individual';
import { Comentario } from '../../components/cards/comentario';
import axiosInstance from '../../api/axiosinstance';

interface PropsAdv {
  id: number | null;
}
interface PropsAdvsList {
  id: number;
  nome: string;
  email: string;
  cnpj: string;
  historico: string;
  areaDeAtuacao: string;
}
export const AdvogadoIndividual = ({ id }: PropsAdv) => {
  const a = true;
  const [advs, setAdvs] = useState([]);

  useEffect(() => {
    async function loadAdvs() {
      const response = await axiosInstance.get('/advogado');

      setAdvs(response.data);
    }
    loadAdvs();
  }, []);

  console.log(id);
  return (
    <>
      {a ? <MenuNoLogin /> : <MenuLogin />}
      <div className="flex flex-row">
        {advs.map((adv: PropsAdvsList, index: number) => {
          console.log(adv.id);
          if (id == index) {
            return (
              <CardPageAdvogadoIndividual
                key={id}
                referencia={'null'}
                name={adv.nome}
                description={'Advogado muito top'}
                rating={'4'}
                photourl={'/elizia-advogada.svg'}
              />
            );
          }
        })}
      </div>
      <div className="bg-gray-200 pl-20 pr-20 pt-8">
        <MontH2 className="mb-10 text-3xl">Avaliações</MontH2>
        <div className="bg-white">
          <Comentario
            referencia={'null'}
            name={'Raquel Garcia'}
            description={'Advogado muito top'}
            rating={'4'}
            photourl={'/comentario-exemplo.svg'}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
