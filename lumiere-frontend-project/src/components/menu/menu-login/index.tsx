import { User } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { LinkUnderline } from '../../link/link-underline';

export const MenuLogin = () => {
  const [activeBorder, setActiveBorder] = useState(false);

  //Colocar bordar quando scrolly for maior que 10px
  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setActiveBorder(true);
      } else {
        setActiveBorder(false);
      }
    }
    //Evento que observa se o scroll mudou
    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 flex w-full min-w-[675px] justify-between border-b ${
        activeBorder ? 'border-gray-300' : ''
      } bg-gray-200 pb-4 pl-16 pr-16 pt-4 transition-all`}
    >
      <a href="/" className="flex items-center">
        <img className="hidden lg:block" src="/logo-blue-text.svg" alt="" />
        <img className="lg:hidden" src="/logo-blue-al.svg" alt="" />
      </a>
      <ul className="flex items-center gap-8 font-mont text-base text-gray-800">
        <li>
          {' '}
          <LinkUnderline text="Casos" href="/Casos" />
        </li>
        <li>
          {' '}
          <LinkUnderline text="Encontrar Advogados" href="/ProcurarAdvogados" />
        </li>

        <li>
          {' '}
          <LinkUnderline text="Batepapo" href="/Casos" />
        </li>

        <li>
          <a href="google.com" className="">
            <User
              weight="fill"
              size={44}
              className="rounded bg-secondary-500 p-2 text-secondary-800 transition-all hover:brightness-[105%]"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
