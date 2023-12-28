import { useState, useEffect } from 'react';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { Footer } from '../../components/footer';
import { CardProcurarAdvogados } from '../../components/cards/card-procurar-advogados';
import { useQuery } from 'react-query';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { ResponseLawyer } from '../../api/services/advogados/get-lawyers/get-lawyer.interface';
const a = false;

interface PropsOptions {
  value: string;
  label: string;
}

export default function ProcurarAdvogados() {
  const [search, setSearch] = useState('');
  const [optionsAdvs, setOptionsAdvs] = useState<PropsOptions[]>([]);

  const advs = useQuery(['advs'], GetLawyer);
  useEffect(() => {
    function loadAdvs() {
      if (advs.data) {
        const newOptionsAdvs = advs.data.map((adv: ResponseLawyer) => ({
          value: adv.nome,
          label: adv.nome,
        }));
        setOptionsAdvs(newOptionsAdvs);
        console.log(optionsAdvs);
      }
    }
    loadAdvs();
  }, []);

  const filtro_barra = advs.data?.filter((adv: ResponseLawyer) =>
    adv.nome.toLowerCase().includes(search.toLowerCase()),
  );

  //   const [filtro_select, setFiltroSelect] = useState<MultiValue<PropsOptions>>();
  //   const selectedOptions = filtro_select?.values ?? [];
  return (
    <>
      {a ? <MenuNoLogin /> : <MenuLogin />}
      <main className="flex min-h-screen w-full flex-col items-center gap-6 bg-gray-200 pb-4 pl-16 pr-16 pt-24">
        <div className="flex w-full max-w-[1528px] flex-col items-center  gap-6">
          <div className="w-fit">
            <DisplayH1>Procurar advogados</DisplayH1>
          </div>
          <div className=" flex w-full flex-row justify-center rounded border-2 border-gray-50 p-6">
            <input
              className="w-2/4 rounded pb-5 pl-10 pr-10 pt-5 font-mont"
              placeholder="Pesquisar advogado por nome"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid w-full max-w-[1528px] grid-cols-2  gap-6">
          {filtro_barra?.map((adv: ResponseLawyer) => (
            <CardProcurarAdvogados
              key={adv.id}
              name={adv.nome}
              description="Advogado muito top"
              rating="4"
              photourl="/michael-s.svg"
              referencia={'ProcurarAdvogados/' + adv.id}
            />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
