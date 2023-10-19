import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Button_ghost_dark } from '../../buttons/button-ghost-dark/index.tsx';
import { MontH2 } from '../../texts/monteserrat/h2/index.tsx';
import { MontInfo } from '../../texts/monteserrat/info/index.tsx';

export const CardProcurarAdvogados = ({ name, description, photourl, referencia }: ICardProps) => {
  //   const onPointerMove = (value: number, index: number) => (value = parseInt(rating));

  return (
    <div className="flex w-full flex-row overflow-hidden rounded border-2 border-gray-200 bg-white pr-10 ">
      <img className="object-cover" src={photourl} alt=""></img>
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
        <div className="flex h-20 items-center">
          <a href={referencia}>
            <Button_ghost_dark title="Contactar" size="sm"></Button_ghost_dark>
          </a>
        </div>
      </div>
    </div>
  );
};
