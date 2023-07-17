import { User } from '@phosphor-icons/react';
import { LinkUnderline } from '../link/link-underline';
import { useEffect, useState } from 'react';

export const Menu = () => {
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

  const auth = null;
  return (
    <nav
      className={`fixed left-0 top-0 flex w-full min-w-[675px] justify-between border-b ${
        activeBorder ? 'border-gray-300' : ''
      } bg-gray-200 pb-4 pl-16 pr-16 pt-4 transition-all`}
    >
      <a href="google.com">
        <img className="hidden lg:block" src="/logo-blue-text.svg" alt="" />
        <img className="lg:hidden" src="/logo-blue-al.svg" alt="" />
      </a>
      <ul className="flex items-center gap-8 font-mont text-base text-gray-800">
        {auth && (
          <li>
            {' '}
            <LinkUnderline text="Casos" href="/Casos" />
          </li>
        )}
        <li>
          {' '}
          <LinkUnderline text="Encontrar Advogados" href="/Casos" />
        </li>
        {auth && (
          <li>
            {' '}
            <LinkUnderline text="Batepapo" href="/Casos" />
          </li>
        )}

        <li>
          {auth ? (
            <a href="google.com" className="">
              <User
                weight="fill"
                size={32}
                className="rounded bg-secondary-500 p-1 text-secondary-800 transition-all hover:brightness-[105%]"
              />
            </a>
          ) : (
            <div className="flex gap-8">
              <button>Entrar</button>
              <button>Cadastro</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
