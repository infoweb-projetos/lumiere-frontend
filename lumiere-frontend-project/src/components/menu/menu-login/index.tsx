import { Person, SignOut, User } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { LinkUnderline } from '../../link/link-underline';
import { useNavigate } from 'react-router-dom';

export const MenuLogin = () => {
  const [activeBorder, setActiveBorder] = useState(false);
  const navigate = useNavigate();

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
      className={`fixed left-0 top-0 z-20 flex w-screen min-w-[675px] items-center justify-center border-b ${
        activeBorder ? 'border-gray-300' : ''
      } bg-gray-200 pb-4 pl-16 pr-16 pt-4 transition-all`}
    >
      <div className="flex w-full max-w-[1528px] items-center justify-between">
        <div className="flex w-full flex-row items-center justify-between gap-16 ">
          <a href="/" className="flex items-center">
            <img className="hidden lg:block" src="/logo-blue-text.svg" alt="" />
            <img className="lg:hidden" src="/logo-blue-al.svg" alt="" />
          </a>
          <ul className="flex items-center gap-8 font-mont text-base text-gray-800">
            <li>
              <LinkUnderline text="Casos" href="/Casos" />
            </li>
            <li>
              <LinkUnderline text="Encontrar Advogados" href="/ProcurarAdvogados" />
            </li>

            <li className="group relative inline-block hover:block">
              <User
                weight="fill"
                size={44}
                className="rounded bg-secondary-500 p-2 text-secondary-800 transition-all hover:brightness-[105%]"
              />
              <div className="absolute right-0 hidden w-[180px] flex-col gap-4 rounded border border-gray-200 bg-white p-4 group-hover:flex">
                <a
                  href="/EditarPerfil"
                  className="flex items-center gap-2 text-gray-800 no-underline hover:text-gray-800/80"
                  style={{ textDecoration: 'none' }}
                >
                  <Person weight="fill" />
                  Editar Perfil
                </a>
                <a
                  onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/');
                  }}
                  href="#"
                  className=" flex items-center gap-2 text-gray-800 no-underline hover:text-gray-800/80"
                  style={{ textDecoration: 'none' }}
                >
                  <SignOut weight="fill" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
