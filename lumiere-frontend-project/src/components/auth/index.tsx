import { useNavigate } from 'react-router-dom';
import { Button_ghost_light } from '../buttons/button-ghost-light';

export const Authteste = () => {
  const navigate = useNavigate();
  return (
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
  );
};
