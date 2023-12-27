import { MontP } from '../texts/monteserrat/p';
import ReactLoading from 'react-loading';

interface PropsBall {
  n: number;
  isLoading: boolean;
}

export const BallAlert = ({ n, isLoading }: PropsBall) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
      {!isLoading && <MontP className=" pt-[2px] text-white">{n}</MontP>}
      {isLoading && <ReactLoading type={'bubbles'} color={'#fff'} height={'20px'} width={'20px'} />}
    </div>
  );
};
