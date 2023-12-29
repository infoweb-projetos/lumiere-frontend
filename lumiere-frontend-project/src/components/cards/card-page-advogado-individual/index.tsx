import { MontH3 } from '../../texts/monteserrat/h3';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating';
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { Categories } from '@/api/services/user/me/index.tsx';

interface CardProps {
  name: string;
  photourl: string;
  description: string;
  categories: Categories[];
  casos: number;
}

export const CardPageAdvogadoIndividual = ({ name, photourl, casos, categories, description }: CardProps) => {
  // const onPointerMove = (value: number, index: number) => value=parseInt(rating);

  return (
    <div className="flex w-full flex-row justify-center bg-blue-300 pb-10 pl-20 pr-20 pt-28">
      <div className="flex w-full max-w-[1500px] flex-row">
        <div className="flex w-1/4 flex-col gap-4">
          <Rating
            size={35}
            disableFillHover={true}
            allowHover={false}
            fillColor="#D1BC87"
            SVGstyle={{ display: 'inline' }}
            initialValue={parseInt('4')}
          />
          <MontH3 className="mr-4 text-white">{name}</MontH3>

          <img className="flex w-4/5  rounded object-cover" src={photourl} alt="" />
        </div>
        <div className="mr-10 flex w-1/4 flex-col items-center">
          <div>
            {/* <div className="pb-8">
              <MontH3 className="pb-2 text-white">Casos vencidos</MontH3>
              <img src="/verde-bola.svg" alt="" />
            </div> */}
            <div className="pb-8">
              <MontH3 className="pb-2 text-white">Casos</MontH3>
              <div className="flex items-center gap-2">
                <img src="/verde-bola.svg" alt="" />
                <MontP className="text-white">{casos}</MontP>
              </div>
            </div>
            <div>
              <MontH3 className="pb-2 text-white">CNPJ</MontH3>
              <MontP className="pb-2 text-white">12.345.678/0002-00</MontP>
            </div>
          </div>
        </div>
        <div className="flex w-2/4 flex-col justify-between">
          <div>
            <div className="pb-8">
              <MontH3 className="pb-2 text-white">Histórico de atuação</MontH3>
              <MontP className="w-full pb-2 text-white">
                {description ? description : 'Não possui uma descrição ainda!'}
              </MontP>
            </div>
            <div className="pb-8">
              <MontH3 className="pb-2 text-white">Áreas de atuação</MontH3>
              <div className="flex items-center gap-2">
                {categories.map((cat) => {
                  return (
                    <MontP key={cat.id} className="flex h-11 items-center rounded-sm bg-white p-2 ">
                      {cat.nome}
                    </MontP>
                  );
                })}
              </div>
            </div>
          </div>

          <ButtonYellow title={'Entrar em contato'} size={'xl'}></ButtonYellow>
        </div>
      </div>
    </div>
  );
};
