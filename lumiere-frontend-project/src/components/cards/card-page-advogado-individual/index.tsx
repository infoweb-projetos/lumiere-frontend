import { MontH3 } from '../../texts/monteserrat/h3';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating';
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';

export const CardPageAdvogadoIndividual = ({ name, photourl }: ICardProps) => {
  // const onPointerMove = (value: number, index: number) => value=parseInt(rating);

  return (
    <div className="flex w-full flex-row justify-center bg-blue-300 pb-4 pl-20 pr-20 pt-28">
      <div className="flex max-w-[1500px] flex-row">
        <div className="flex w-1/4 flex-col items-center">
          <div className="flex flex-row justify-center ">
            <MontH3 className="mr-4 text-white">{name}</MontH3>
            <Rating
              size={35}
              disableFillHover={true}
              allowHover={false}
              fillColor="#D1BC87"
              SVGstyle={{ display: 'inline' }}
              initialValue={parseInt('4')}
            />
          </div>
          <img className="w-80 -rotate-90 object-cover" src={photourl} alt=''/>
        </div>
        <div className="mr-10 flex w-1/4 flex-col items-center">
          <div>
            <div className="pb-8">
              <MontH3 className="pb-2 text-white">Casos vencidos</MontH3>
              <img src="/verde-bola.svg" alt=''/>
            </div>
            <div className="pb-8">
              <MontH3 className="pb-2 text-white">Casos perdidos</MontH3>
              <img src="/vermelho-bola.svg" alt=''/>
            </div>
            <div>
              <MontH3 className="pb-2 text-white">CNPJ</MontH3>
              <MontP className="pb-2 text-white">12.345.678/0002-00</MontP>
            </div>
          </div>
        </div>
        <div className="flex w-3/6 flex-col">
          <div className="pb-8">
            <MontH3 className="pb-2 text-white">Histórico de atuação</MontH3>
            <MontP className="pb-2 text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
            </MontP>
          </div>
          <div className="pb-8">
            <MontH3 className="pb-2 text-white">Áreas de atuação</MontH3>
            <div className="flex">
              <MontP className="rounded-sm bg-white p-2 ">FAMILIAR</MontP>
              <MontP className="ml-5 rounded-sm bg-white p-2">ROUBOS</MontP>
            </div>
          </div>
          <ButtonYellow title={'Entrar em contato'} size={'xl'}></ButtonYellow>
        </div>
      </div>
    </div>
  );
};
