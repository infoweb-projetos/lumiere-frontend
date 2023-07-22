import { useEffect, useState } from 'react';
import { Button_blue } from '../../buttons/button-blue-icon';
import { Button_ghost_light } from '../../buttons/button-ghost-light';
import { LinkUnderline } from '../../link/link-underline';

export const MenuNoLogin = () => {
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

  function handleLogin() {
    console.log('Ir para /Login');
  }

  function handleCadastro() {
    console.log('Ir para /Cadastro');
  }

  return (
    <nav
      className={`fixed left-0 top-0 flex w-full min-w-[675px] justify-between border-b ${
        activeBorder ? 'border-gray-300' : ''
      } bg-gray-200 pb-4 pl-16 pr-16 pt-4 transition-all`}
    >
      <a href="google.com" className="flex items-center">
        <img className="hidden lg:block" src="/logo-blue-text.svg" alt="" />
        <img className="lg:hidden" src="/logo-blue-al.svg" alt="" />
      </a>
      <ul className="flex items-center gap-8 font-mont text-base text-gray-800">
        <li>
          {' '}
          <LinkUnderline text="Encontrar Advogados" href="/Casos" />
        </li>

        <li>
          <div className="flex gap-8">
            <Button_ghost_light title="Login" size="sm" func={handleLogin} />
            <Button_blue title="Cadastro" size="sm" func={handleCadastro} />
          </div>
        </li>
      </ul>
    </nav>
  );
};
