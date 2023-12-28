import { useEffect, useState } from 'react';
import { Button_blue } from '../../buttons/button-blue-icon';
import { Button_ghost_light } from '../../buttons/button-ghost-light';
import { LinkUnderline } from '../../link/link-underline';
import { useNavigate } from 'react-router-dom';

export const MenuNoLogin = () => {
  const navigate = useNavigate();
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
    navigate('/Login');
    console.log('Ir para /Login');
  }

  function handleCadastro() {
    navigate('/Cadastro');
    console.log('Ir para /Cadastro');
  }

  return (
    <nav
      className={`sticky left-0 top-0  z-20 flex w-full min-w-[675px] justify-center border-b ${
        activeBorder ? 'border-gray-300' : ''
      } bg-gray-200 pb-4 pt-4 transition-all`}
    >
      <div className="flex w-full max-w-[1528px] items-center justify-between gap-16">
        <a href="/" className="flex items-center">
          <img className="hidden lg:block" src="/logo-blue-text.svg" alt="" />
          <img className="lg:hidden" src="/logo-blue-al.svg" alt="" />
        </a>
        <ul className="flex items-center gap-8 font-mont text-base text-gray-800">
          <li>
            {' '}
            <LinkUnderline text="Encontrar Advogados" href="/ProcurarAdvogados" />
          </li>

          <li>
            <div className="flex gap-8">
              <Button_ghost_light title="Login" size="sm" func={handleLogin} className="shadow-none" />
              <Button_blue title="Cadastro" size="sm" func={handleCadastro} className="shadow-none" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
