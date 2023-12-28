import { DisplayH1 } from '../../components/texts/display-sm/h1';
import Calendar from 'rsuite/Calendar';
import 'rsuite/dist/rsuite.min.css';
import './calendar.css';
import { Menu } from '@/components/menu/menu';

export const InitialPage = () => {
  return (
    <>
      <Menu />
      <main className=" flex min-h-screen w-full flex-col items-center justify-center scroll-smooth bg-gray-200 pb-4 pt-24">
        <div className="flex w-full max-w-[1500px] flex-col items-center justify-center gap-4">
          <DisplayH1>Casos recentes</DisplayH1>
          <Calendar
            renderCell={() => {
              return (
                <div>
                  <div className="flex w-full rounded bg-white p-1">
                    <p className="font-mont">9:00 pm - Contrato com a sua mãe</p>
                  </div>
                  <div>ver mais</div>
                </div>
              );
            }}
            className="rounded bg-white"
          />
        </div>
      </main>
    </>
  );
};
