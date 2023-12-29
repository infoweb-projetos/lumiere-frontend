import { Menu } from '@/components/menu/menu';
import { DisplayH1 } from '@/components/texts/display-sm/h1';

export const CreateMeet = () => {
  return (
    <>
      <Menu />
      <main className=" flex min-h-screen w-full flex-col items-center scroll-smooth bg-gray-200 pb-4 pt-24">
        <div className="flex  w-full max-w-[1500px] flex-col gap-4">
          <div className="rounded bg-white p-8">
            <DisplayH1>Criar Reunião</DisplayH1>
          </div>
        </div>
      </main>
    </>
  );
};
