import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating';
import { MontH2 } from '../../texts/monteserrat/h2/index.tsx';

export const CardMenuBottom = ({ name, description, rating, photourl }: ICardProps) => {
  const onPointerMove = () => parseInt(rating ? rating : '0');

  return (
    <div className="flex w-[400px] flex-col overflow-hidden rounded bg-white  ">
      <div className="flex flex-col justify-between pt-4">
        <div className="flex flex-col gap-4 p-8">
          <Rating
            onClick={onPointerMove}
            disableFillHover={true}
            allowHover={false}
            fillColor="#D1BC87"
            size={28}
            SVGstyle={{ display: 'inline' }}
            initialValue={parseInt(rating ? rating : '5')}
          />
          <MontH2>{name}</MontH2>
          <MontP className="flex h-40">{description}</MontP>
        </div>
        <img className="h-60 object-cover object-top" src={photourl} alt=""></img>
      </div>
    </div>
  );
};
