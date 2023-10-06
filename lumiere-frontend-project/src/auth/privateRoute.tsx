import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './auth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = isAuthenticated();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};
