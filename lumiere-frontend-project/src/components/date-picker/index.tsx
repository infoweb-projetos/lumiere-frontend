import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarBlank } from '@phosphor-icons/react';

interface Picker {
  date: Date;
  setDate: (e: Date) => void;
}

export function DatePickerDemo({ date, setDate }: Picker) {
  const FormatarData = (data: Date) => {
    const nomesMeses: string[] = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    const nomeMes: string = nomesMeses[data.getMonth()];
    const dia: number = data.getDate();
    const ano: number = data.getFullYear();
    return <span>{`${nomeMes} ${dia}, ${ano}`}</span>;
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start border bg-gray-200 text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarBlank className="mr-2 h-4 w-4" />
          {date ? FormatarData(date) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            if (e) {
              setDate(e);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
