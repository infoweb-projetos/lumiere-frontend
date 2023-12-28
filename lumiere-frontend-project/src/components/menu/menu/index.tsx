import { isAuthenticated } from '@/auth/auth';
import { MenuLogin } from '../menu-login';
import { MenuNoLogin } from '../menu-no-login';

export const Menu = () => {
  const user = isAuthenticated();

  if (user) {
    return <MenuLogin />;
  } else {
    return <MenuNoLogin />;
  }
};
