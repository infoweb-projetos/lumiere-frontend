import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { MontH2 } from '../../texts/monteserrat/h2/index.tsx';
import { MontInfo } from '../../texts/monteserrat/info/index.tsx';

export const CardAmarelo = ({ name, description, photourl, referencia }: ICardProps) => {
  //   const onPointerMove = (value: number, index: number) => (value = parseInt(rating));

  return (
    <div className="flex w-[400px] flex-col overflow-hidden rounded bg-white">
      <img className="h-52 w-full object-cover object-top" src={photourl} alt=""></img>
      <div className=" flex h-80 flex-col gap-6 p-8">
        {/* <Rating
          onClick={onPointerMove}
          disableFillHover={true}
          allowHover={false}
          fillColor="#3F3F3F"
          SVGstyle={{ display: 'inline' }}
          initialValue={parseInt(rating)}
        /> */}
        <div className="flex flex-col gap-1">
          <MontH2>{name}</MontH2>
          <MontInfo className="text-gray-600">Bio do advogado</MontInfo>
        </div>

        <MontP className="h-28">{description}</MontP>
        <div className="flex items-center">
          <a href={referencia}>
            {' '}
            <ButtonYellow title="Contactar" size="sm"></ButtonYellow>
          </a>
        </div>
      </div>
    </div>
  );
};
