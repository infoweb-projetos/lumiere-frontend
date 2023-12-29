import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating';

export const Comentario = ({ name, description, photourl }: ICardProps) => {
  return (
    <>
      <div className="flex flex-col bg-white p-10">
        <div className="ml-20 flex flex-row bg-white">
          <div className="flex justify-end">
            <img className="w-[90px]" src={photourl}></img>
          </div>
          <div className="ml-10 flex flex-col">
            <div className="flex flex-row justify-center ">
              <MontH1 className=" mr-4 text-[33px]">{name}</MontH1>
              <Rating
                size={40}
                disableFillHover={true}
                allowHover={false}
                fillColor="#D1BC87"
                SVGstyle={{ display: 'inline' }}
                initialValue={5}
              />
            </div>
            <MontP className="mt-2 text-[24px]">{description}</MontP>
          </div>
        </div>
        <div className="w-5/4 ml-20 mt-20 h-[1px] bg-gray-100 opacity-20"></div>
      </div>
    </>
  );
};
