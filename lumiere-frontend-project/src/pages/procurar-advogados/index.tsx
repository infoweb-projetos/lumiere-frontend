import { useState, useEffect } from 'react';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { Footer } from '../../components/footer';
import { CardProcurarAdvogados } from '../../components/cards/card-procurar-advogados';
import { useQuery } from 'react-query';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { ResponseLawyer } from '../../api/services/advogados/get-lawyers/get-lawyer.interface';
import { Menu } from '@/components/menu/menu';
import { Skeleton } from '@/components/ui/skeleton';
import { MagnifyingGlass } from '@phosphor-icons/react';

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

  return (
    <>
      <Menu />
      <main className="flex min-h-screen w-full flex-col items-center gap-4 bg-gray-200 pb-4 pl-16 pr-16 pt-24">
        <div className="flex w-full max-w-[1528px] flex-col items-center  gap-4">
          <div className="w-full">
            <DisplayH1>Encontrar advogados</DisplayH1>
          </div>
          <div className="flex w-full items-center gap-4">
            <MagnifyingGlass size={32} weight="fill" />
            <input
              className="w-full rounded pb-5 pl-10 pr-10 pt-5 font-mont"
              placeholder="Pesquisar advogado por nome"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {advs.isLoading ? (
          <div className="grid w-full max-w-[1528px] grid-cols-2  gap-4">
            <Skeleton className="h-[350px] w-full" />
            <Skeleton className="h-[350px] w-full" />
            <Skeleton className="h-[350px] w-full" />
          </div>
        ) : (
          advs.isFetched && (
            <div className="grid w-full max-w-[1528px] grid-cols-2  gap-4">
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
          )
        )}
      </main>
    </>
  );
}
