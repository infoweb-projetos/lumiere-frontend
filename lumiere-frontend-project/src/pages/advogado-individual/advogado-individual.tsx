import { MontH2 } from '../../components/texts/monteserrat/h2';
import { Footer } from '../../components/footer';
import { CardPageAdvogadoIndividual } from '../../components/cards/card-page-advogado-individual';
import { Comentario } from '../../components/cards/comentario';
import { useQuery } from 'react-query';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { useParams } from 'react-router-dom';
import { Menu } from '@/components/menu/menu';

export const AdvogadoIndividual = () => {
  const { id } = useParams();
  const advs = useQuery('advs', GetLawyer);
  console.log(advs);

  return (
    <>
      <Menu />
      <div className="flex flex-row">
        {advs.isFetched &&
          id &&
          advs.data &&
          advs.data.map((adv) => {
            if (id == adv.id) {
              return (
                <CardPageAdvogadoIndividual
                  key={id}
                  name={adv.nome}
                  description={adv.historico}
                  photourl={'/michael-s.svg'}
                  casos={adv.casos.length}
                  categories={adv.categorias}
                />
              );
            }
          })}
      </div>
      <div className="flex flex-col items-center bg-gray-200 pl-20 pr-20 pt-8">
        <div className="mb-8 flex w-full max-w-[1500px] flex-col">
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
      </div>
      <Footer />
    </>
  );
};
