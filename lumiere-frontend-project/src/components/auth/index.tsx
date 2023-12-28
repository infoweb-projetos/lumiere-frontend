import { useNavigate } from 'react-router-dom';
import { Button_ghost_light } from '../buttons/button-ghost-light';
import { Menu } from '../menu/menu';

export const Authteste = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <>
      <Menu />
      <div className="flex h-screen w-screen items-center justify-center gap-10 bg-gray-100">
        <h1 className="text-gray-200">Autenticado</h1>

        <Button_ghost_light
          title="Log out"
          func={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}
          size="sm"
        />
      </div>
    </>
  );
};
