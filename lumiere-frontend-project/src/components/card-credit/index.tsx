import { MontH3 } from '../texts/monteserrat/h3';
import { MontInfo } from '../texts/monteserrat/info';
import { MontP } from '../texts/monteserrat/p';
import { Skeleton } from '../ui/skeleton';

interface PropsCard {
  numberCard: string;
  dateEnd: string;
  name?: string;
}

export const CardCredit = ({ numberCard, dateEnd, name }: PropsCard) => {
  return (
    <div className="flex h-[200px] w-[70%] flex-col gap-2 rounded border border-gray-400 bg-gradient-to-r from-blue-800/70 to-semantic-red/70 p-4">
      <MontH3 className="text-white">Lumiere Card</MontH3>
      <div className="h-11 w-14 rounded bg-gradient-to-r from-secondary-500 " />
      <div className="flex h-9 gap-2">
        {numberCard ? <MontP className="py-2 text-white/90">{numberCard}</MontP> : <Skeleton className="h-10 w-40 " />}
      </div>
      <div className="flex  items-center justify-between">
        {name ? <MontP className="py-2 text-white/80">{name}</MontP> : <Skeleton className="h-10 w-40 " />}
        {dateEnd ? <MontP className="py-2 text-white/80">{dateEnd}</MontP> : <Skeleton className="h-10 w-10 " />}
      </div>
    </div>
  );
};
