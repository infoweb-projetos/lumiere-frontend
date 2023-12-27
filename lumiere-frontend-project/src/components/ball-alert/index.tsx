import { MontP } from '../texts/monteserrat/p';

interface PropsBall {
  n: number;
}

export const BallAlert = ({ n }: PropsBall) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
      <MontP className="pt-[3px] text-white">{n}</MontP>
    </div>
  );
};
