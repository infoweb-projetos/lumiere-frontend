import { MontP } from '../../components/texts/monteserrat/p';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { CardAmarelo } from '../../components/cards/card-menu-amarelo';
import { CardMenuBottom } from '../../components/cards/card-menu-foto-bottom';
import { Button_ghost_dark } from '../../components/buttons/button-ghost-dark';
import { Footer } from '../../components/footer';
import { useQuery } from 'react-query';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { ResponseLawyer } from '../../api/services/advogados/get-lawyers/get-lawyer.interface';
import { ArrowDown } from '@phosphor-icons/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@/components/menu/menu';

export default function HomePage() {
  const a = true;
  const navigate = useNavigate();

  const advs = useQuery(['advs'], GetLawyer);

  const advogado = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Menu />
      <main className=" flex w-full flex-col items-center scroll-smooth bg-gray-200 pb-4 pt-24">
        <div className=" flex h-[75vh] w-full max-w-[1528px] flex-row items-center justify-center gap-12 p-12 lg:justify-between 2xl:p-0">
          <div className="flex flex-col justify-center ">
            <div className="flex flex-col ">
              <DisplayH1 className="text-[56px] leading-[3.5rem] text-yellow-800">
                FACILITE SEU
                <br /> CONTATO COM
                <DisplayH1 className="text-[56px] text-blue-300">ADVOGADOS</DisplayH1>
              </DisplayH1>
            </div>

            <MontP className="max-w-md pb-8 pt-8 text-[18px]">
              Crie uma conta na advocacia lumiere e tenha acesso a diversos mecanismos para auxiliar no seu caso!
            </MontP>
            <Button_ghost_dark size="sm" title="CRIAR CONTA" type="button" func={() => navigate('/cadastro')} />
          </div>
          <div>
            <img src="/banner.svg" alt="Um advogado e varios quadradros"></img>
          </div>
        </div>
        <div className="z-10 mb-[-40px]">
          <button
            onClick={() => scrollToSection(advogado)}
            className="rounded-full border border-gray-400 bg-gray-200 p-6 transition-all hover:bg-gray-50"
          >
            <ArrowDown size={32} weight="regular" />
          </button>
        </div>
        <div ref={advogado} className="flex h-screen w-full flex-col items-center justify-center bg-secondary-500">
          <div className="flex w-full max-w-[1528px] flex-col items-center gap-16">
            <DisplayH1 className="text-[48px]">Veja nossos principais advogados</DisplayH1>
            <div className="flex justify-center gap-6 p-12  2xl:p-0 ">
              {advs.isFetched &&
                advs.data &&
                advs.data.map((adv: ResponseLawyer, index: number) => {
                  if (index < 3) {
                    return (
                      <CardAmarelo
                        key={index}
                        referencia={'ProcurarAdvogados/' + adv.id}
                        name={adv.nome}
                        description="Advogado muito top"
                        photourl="/michael-s.svg"
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>

        <div className="flex h-screen flex-col items-center justify-center ">
          <div className="flex w-full max-w-[1528px] flex-col items-center gap-16">
            <DisplayH1 className="text-[48px]">O melhor ambiente para encontrar um advogado</DisplayH1>
            <div className="flex flex-wrap justify-between gap-6 ">
              {advs.isFetched &&
                advs.data &&
                advs.data.map((adv, index: number) => {
                  if (index < 3) {
                    return (
                      <CardMenuBottom
                        key={adv.id}
                        name={adv.nome}
                        description="Advogado muito top"
                        rating="4"
                        photourl="/michael-s.svg"
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row items-center justify-center p-28">
          <div className="flex max-w-[1528px] items-center justify-between gap-16">
            <div>
              <DisplayH1 className="text-[56px] leading-[3.5rem] text-yellow-800">
                ENCONTRE
                <DisplayH1 className="text-[56px] text-blue-300">ADVOGADOS</DisplayH1>
              </DisplayH1>
            </div>
            <Button_ghost_dark size="xl" title="CRIAR CONTA" type="button" func={() => navigate('/cadastro')} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
